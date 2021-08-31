package com.myt.servlet;


import java.io.*;

import javax.servlet.ServletException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;

import javax.servlet.http.HttpServletRequest;

import javax.servlet.http.HttpServletResponse;
import com.myt.domain.Constants;


//import org.apache.log4j.Logger;

/**
 * 接收小程序的“麦克风文件”，实际上也就是小程序0.5毫秒发送一次录音文件
 */

@WebServlet( urlPatterns = {"/micro"})

public class Mrcophone extends HttpServlet {

    //  private static Logger logger = Logger.getLogger(FileLoadServlet.class);

    private static final long serialVersionUID = 1302377908285976972L;

    private PrintWriter out;
    private String filename;


    @Override

    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        System.out.println("microload");
        if (request.getContentLength() > 0) {

            InputStream inputStream = null;

            FileOutputStream outputStream = null;

            try {
                out = new PrintWriter(new BufferedOutputStream(
                        new FileOutputStream(Constants.MICROLIST,true)));
                request.setCharacterEncoding("utf-8");
                inputStream = request.getInputStream();

                // 给新文件拼上时间毫秒，防止重名

                long now = System.currentTimeMillis();

                File file = new File(Constants.MICROPATH, "file" + now + ".oga");
                filename=file.getName();
                System.out.println(file.getName());
                file.createNewFile();

                outputStream = new FileOutputStream(file);
                byte temp[] = new byte[1024];

                int size = -1;

                while ((size = inputStream.read(temp)) != -1) { // 每次读取1KB，直至读完

                    outputStream.write(temp, 0, size);

                }System.out.println("copy file in path success");

                // logger.info("File load success.");

            }
            catch (IOException e) {

                //  logger.warn("File load fail.", e);
                System.out.println("recordUpload IO");
                request.getRequestDispatcher("/fail.jsp").forward(request, response);

            } finally {
                out.println("\\microplay\\"+filename);
                outputStream.close();
                inputStream.close();
                out.close();
            }

        }
        response.setCharacterEncoding("UTF-8");//设置服务器的编码，默认是ISO-8859-1

        response.setContentType("text/html; charset = utf-8");
        response.setStatus(200);
        response.getWriter().println("success");
        request.getRequestDispatcher("/succ.jsp").forward(request, response);
    }

}