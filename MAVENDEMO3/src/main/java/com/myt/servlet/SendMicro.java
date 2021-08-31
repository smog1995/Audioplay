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

@WebServlet(urlPatterns = "/getmicro")
public class SendMicro extends HttpServlet {
    private BufferedReader br;//之后要用


    @Override
    /**
     * 思路：将所接收的麦克风音频文件路径发送给前端
     *前端就可以根据路径去拿资源（SendNextMusic实现方式一样）
     *
     *
     * @param microlist 用来打开存放麦克风录音列表的文件
     */

    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        File microlist = new File(Constants.MICROLIST);
        BufferedReader bufferedReader =null;
        PrintWriter out = null;
        ArrayList<String> list =null;
        PrintWriter pw =null;
        try{
            //首先判断录音文件夹中是否有内容
            if(microlist.exists()&&!(microlist.exists() && microlist.length() == 0)) {
                bufferedReader = new BufferedReader(new InputStreamReader
                        (new FileInputStream(Constants.MICROLIST)));
                String str = null;
                list = new ArrayList<>();
                while ((str = bufferedReader.readLine()) != null) {
                    list.add(str);
                }
                //发送record路径
                out = resp.getWriter();
                if (list.get(0) != null)
                    out.println(list.get(0));
                else out.println("empty");

                //删除第一行写回到文本
                list.remove(0);

                pw = new PrintWriter(new BufferedWriter
                        (new OutputStreamWriter(new FileOutputStream(Constants.MICROLIST))));
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

        }catch (IOException e)
        {
            e.printStackTrace();
            System.out.println("program SendMicro has exception");
        }
        finally{
            if(out!=null) out.close();
            if(bufferedReader!=null) bufferedReader.close();
            if(pw!=null) pw.close();
        }




    }
}
