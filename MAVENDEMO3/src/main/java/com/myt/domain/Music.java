package com.myt.domain;

public class Music {
    private String path;
    private String name;
    public Music(String path, String name) {
        this.path = path;
        this.name = name;
    }
    public Music(){}
    public void setPath(String path) {
        this.path = path;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPath() {
        return path;
    }

    public String getName() {
        return name;
    }


}
