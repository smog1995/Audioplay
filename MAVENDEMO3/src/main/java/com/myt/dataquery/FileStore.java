package com.myt.dataquery;

import com.myt.domain.Constants;
import java.io.*;

/**
 * 将想要播放的歌曲事先存放于文件夹中,
 * 然后将目录下的所有歌曲路径放入playlist文件中（即播放列表）
 */
public class FileStore {
    //private FileInputStream  fis;
  

    public  void Init()
    {
        String[]  dirarr;
         PrintWriter out=null;
        try{
            File musiclist=new File(Constants.MUSICLIST);//文件存储当前播放列表
            File recordlist=new File(Constants.RECORDLIST);//录音文件不用初始化，用完就丢
            File microlist=new File(Constants.MICROLIST);
            //System.out.println(Constants.MUSICLIST);
            if (!musiclist.exists()){//若此目录不存在，则创建之// 这个东西只能简历一级文件夹，两级是无法建立的。。。。。
                musiclist.createNewFile();
                System.out.println("spot a new file"+musiclist.getPath());
            }
            if(!recordlist.exists())
            {
                recordlist.createNewFile();
                System.out.println("spot a new file"+recordlist.getPath());
            }
            if(!microlist.exists())
            {
                microlist.createNewFile();
                System.out.println("spot a new file"+microlist.getPath());
            }

            out = new PrintWriter(new BufferedOutputStream(
                    new FileOutputStream(Constants.MUSICLIST)));
            File musicfile=new File(Constants.MUSICPATH);
            dirarr=musicfile.list();

            if(dirarr!=null)
            for(int i=0;i<dirarr.length;i++)
            {
                out.println("\\musicplay\\"+dirarr[i]);
                System.out.println(dirarr[i]);
            }

        }catch (IOException e)
        {
            System.out.println("Filestore program error");
            e.printStackTrace();
        }finally {
            if(out!=null)out.close();
            System.out.println("FileStore finished");
          //  System.out.println("restart program FileStore");
        //this.Init();//第一次尝试，也就是重启程序
        }

    }
/*
    public static void main(String[] args) {
        FileStore fs=new FileStore();
        fs.Init();
    }


 */

}
