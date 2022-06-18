package com.bialandingpage.marcenariacriativa.security;

import com.bialandingpage.marcenariacriativa.dao.UserDao;
import com.bialandingpage.marcenariacriativa.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class MyUserDetailsService implements UserDetailsService {
    @Autowired
    UserDao userDao;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userDao.getLogin(username);
        if (user == null) {
            throw new UsernameNotFoundException("Usuário não encontrado.");
        }
        System.out.println("++++++++++++++++++++++++++" + user.getUsername());
        System.out.println("++++++++++++++++++++++++++" + user.getPassword());
        System.out.println("++++++++++++++++++++++++++" + user.getClass());
        return new MyUserDetails(user);
    }
}
