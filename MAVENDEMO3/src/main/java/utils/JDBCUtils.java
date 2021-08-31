package utils;


import jdk.nashorn.internal.scripts.JD;

import java.io.FileReader;
import java.io.IOException;
import java.net.URL;
import java.sql.*;
import java.util.Properties;

//jdbc工具类，便捷接口（简化书写）
public class JDBCUtils {
    private static String url;
    private static  String user;
    private static String password;
    private static String driver;
    //文件的读取只需一次
    static {
        try{
            //读取资源文件获取值
            //Properties集合类，可以获取文件中的数据
            Properties pro=new Properties();
            //获取src路径下的文件路径
            //ClassLoader classLoader= JDBCUtils.class.getClassLoader();
            //URL res=classLoader.getResource("jdbc.properties");
            //String path=res.getPath();
            //System.out.println("jdbc.properites的文件路径："+path);
           // pro.load(new FileReader(path));
            pro.load(new FileReader("D:\\code\\JAVA_Project\\MAVENDEMO3\\src\\jdbc.properties"));
            url=pro.getProperty("url");//该文件中url的值
            System.out.println(url);
            user=pro.getProperty("user");
            password=pro.getProperty("password");
            driver=pro.getProperty("driver");


            try{
                Class.forName(driver);
            }catch (ClassNotFoundException e)
            {
                e.printStackTrace();
            }
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }


    }

    /**
     * 获取链接
     * @return
     */
    public static Connection getConnection() throws SQLException
    {
        return DriverManager.getConnection(url,user,password);
    }

    /**
     *释放资源
     * @param rs
     * @param stmt
     * @param conn
     */
    public static void close(ResultSet rs, Statement stmt, Connection conn)
    {
        if(rs!=null)
            try{
                rs.close();
            }catch (SQLException e){
                e.printStackTrace();
            }
        if(stmt!=null)
            try{
                stmt.close();
            }catch (SQLException e){
                e.printStackTrace();
            }

        if(conn!=null)
            try{
                conn.close();
            }catch (SQLException e){
                e.printStackTrace();
            }
    }
}
