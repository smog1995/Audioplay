package com.myt.servlet;



import java.io.*;

import javax.servlet.ServletException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;

import javax.servlet.http.HttpServletRequest;

import javax.servlet.http.HttpServletResponse;
import com.myt.domain.Constants;

/**
 * 接收小程序发送的音频文件
 */
@WebServlet(name = "FileLoadServlet", urlPatterns = {"/fileload"})

public class RecordFileUpload extends HttpServlet {

    //  private static Logger logger = Logger.getLogger(FileLoadServlet.class);

    private static final long serialVersionUID = 1302377908285976972L;

    private PrintWriter out;
    private String filename;


    @Override

    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        System.out.println("fileload");
        if (request.getContentLength() > 0) {

            InputStream inputStream = null;

            FileOutputStream outputStream = null;

            try {
                out = new PrintWriter(new BufferedOutputStream(
                        new FileOutputStream(Constants.RECORDLIST,true)));
                request.setCharacterEncoding("utf-8");
                inputStream = request.getInputStream();

                // 给新文件拼上时间毫秒，防止重名

                long now = System.currentTimeMillis();

                File file = new File(Constants.RECORDPATH, "file" + now + ".m4a");
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
                out.println("\\recordplay\\"+filename);
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