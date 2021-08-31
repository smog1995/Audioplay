package com.myt.servlet;

import com.myt.dataquery.FileStore;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.ArrayList;

import com.myt.domain.Constants;

@WebServlet(urlPatterns = "/music")
public class SendNextMusic extends HttpServlet {
    private BufferedReader br;//之后要用


    @Override
    /**
     * 思路：发送音频播放路径，首先判断录音列表是否有内容，如果有，优先发送
     *      如果没有，再选择发送音乐播放列表的内容
     *      
     *      
     *  JAVA的IO流使用了装饰模式,关闭最外面的流的时候会自动调用被包装的流的close()方法
     * 一般情况下是：先打开的后关闭，后打开的先关闭。
     * 
     * @param musiclist 用来打开存放音乐播放列表的文件
     * @param recordlist 用来打开录音列表
     */
    
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        File musiclist = new File(Constants.MUSICLIST);
        File recordlist=new File(Constants.RECORDLIST);
        BufferedReader bufferedReader =null;
        PrintWriter out = null;
        ArrayList<String> list =null;
        PrintWriter pw =null;
        try{
            //首先判断录音文件夹中是否有内容
            if(recordlist.exists()&&!(recordlist.exists() && recordlist.length() == 0)) {
                bufferedReader = new BufferedReader(new InputStreamReader
                        (new FileInputStream(Constants.RECORDLIST)));
                String str = null;
                list = new ArrayList<>();
                while ((str = bufferedReader.readLine()) != null) {
                    list.add(str);
                }
                //发送record路径
                out = resp.getWriter();
                if (list.get(0) != null)
                    out.println(list.get(0));

                //删除第一行写回到文本
                list.remove(0);

                pw = new PrintWriter(new BufferedWriter
                        (new OutputStreamWriter(new FileOutputStream(Constants.RECORDLIST))));
                if (list.size() != 0)
                    for (String string : list) {
                        pw.println(string);
                        //System.out.println("string:"+string);
                    }
                else if (list.size() == 0) {

                    pw.write("");
                    System.out.println("size=0");
                }

            }
            //判断音乐文件是否存在、并且有内容
            else if (musiclist.exists() && !(musiclist.exists() && musiclist.length() == 0)) {
                bufferedReader=new BufferedReader(new InputStreamReader
                        (new FileInputStream(Constants.MUSICLIST)));
                String str = null;
                list = new ArrayList<>();
                while ((str = bufferedReader.readLine()) != null) {
                    list.add(str);
                }
                //发送music路径
                out = resp.getWriter();
                if (list.get(0) != null)
                    out.println(list.get(0));

                //删除第一行写回到文本
                list.remove(0);
                pw = new PrintWriter(new BufferedWriter
                        (new OutputStreamWriter(new FileOutputStream(Constants.MUSICLIST))));
                if (list.size() != 0)
                    for (String string : list) {
                        pw.println(string);
                        //System.out.println("string:"+string);
                    }
                else if (list.size() == 0) {

                    pw.write("");
                    System.out.println("music has played completely");
                }
            } else {
                //文件已经读到结尾，则进行初始化
                FileStore fs=new FileStore();
                fs.Init();
            }
        }catch (IOException e)
        {
            e.printStackTrace();
            System.out.println("program sendnextmusic has exception");
        }
        finally{
                if(out!=null) out.close();
                if(bufferedReader!=null) bufferedReader.close();
                if(pw!=null) pw.close();
        }


        

    }
}
