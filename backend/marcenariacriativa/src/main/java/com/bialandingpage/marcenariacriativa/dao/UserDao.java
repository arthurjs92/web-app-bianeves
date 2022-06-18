package com.bialandingpage.marcenariacriativa.dao;

import com.bialandingpage.marcenariacriativa.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

public class UserDao {
    @Autowired
    JdbcTemplate jdbc;

    public User getLogin(String username) {
        System.out.println("---------------------------------->" + username);
        return jdbc.queryForObject(
                "select * from user where login = ?",
                (res, linha) -> new User(
                        res.getString("username"),
                        res.getString("password"),
                        res.getString("role")),
                username);
    }
}
