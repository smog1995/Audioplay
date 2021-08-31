package com.myt.servlet;


import jdk.nashorn.internal.runtime.ErrorManager;
import org.apache.commons.io.IOUtils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "DownloadYhsc", urlPatterns = {"/download"})
public class DownloadYhsc extends HttpServlet
{
    private static final long serialVersionUID = 8529206527876956262L;

    @Override
    @SuppressWarnings({ "unchecked" })
    public void doGet(HttpServletRequest request, HttpServletResponse response) {
        System.out.println("roget that");
        /*
        Map paramMap = request.getParameterMap();
        if (null == paramMap || paramMap.isEmpty()) {
            System.out.println("null");
            return;
        }

         */

        String serverPath = "127.0.0.1";

        String fileName;
        try {
            fileName = URLEncoder.encode("xxx.m4a", "UTF-8");
            String header = new StringBuilder().append("attachment;filename=")
                    .append(fileName).toString();
            response.setContentType("application/octet-stream");
            response.addHeader("Content-disposition", header);
            response.addHeader("Transfer-Encoding", null);
            response.addHeader("connection", "close");
        } catch (UnsupportedEncodingException e1) {
            // TODO Auto-generated catch block
            e1.printStackTrace();
        }

        // File file = new File(serverPath + "xxx.docx");
        File file = new File("E:\\uploadfilefolder\\tmp_b35402629d9adb8f7eb842652aa61f1f951bd53d6ff3b2d3.m4a");
        FileInputStream in = null;
        OutputStream out = null;
        ErrorManager logger=new ErrorManager();
        try {
            in = new FileInputStream(file);
            out = response.getOutputStream();
            IOUtils.copy(in, out);
            out.flush();

        } catch (FileNotFoundException e) {
            e.printStackTrace();
            logger.error("文件不存在" + e);
            System.out.println("文件不存在");
        } catch (IOException e) {
            e.printStackTrace();
            logger.error("获取流异常" + e);
            System.out.println("获取流异常");
        } finally {
            IOUtils.closeQuietly(out);
            IOUtils.closeQuietly(in);
        }
    }

    /**
     * 转换编码
     *
     * @param fileName
     * @return
     */
    /*
    private String getDecodedStr(String str) {
        String decodedStr = null;
        try {
            if (null == str || str.isEmpty()) {
                decodedStr = StringUtils.EMPTY;
            } else {
                decodedStr = URLDecoder.decode(str, "UTF-8");
            }
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
            logger.error("不支持的编码" + e);
        }
        return decodedStr;
    }

     */

    /**
     * Destruction of the servlet. <br>
     */
    @Override
    public void destroy() {
        super.destroy(); // Just puts "destroy" string in log
        // Put your code here
    }

    /**
     * Initialization of the servlet. <br>
     *
     * @throws ServletException
     *             if an error occurs
     */
    @Override
    public void init() throws ServletException {
        // Put your code here
    }

    /**
     * The doPost method of the servlet. <br>
     *
     * This method is called when a form has its tag value method equals to
     * post.
     *
     * @param request
     *            the request send by the client to the server
     * @param response
     *            the response send by the server to the client
     * @throws ServletException
     *             if an error occurred
     * @throws IOException
     *             if an error occurred
     */
    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doGet(request, response);
    }
}

