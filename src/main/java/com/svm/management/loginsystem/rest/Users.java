package com.svm.management.loginsystem.rest;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlRootElement;
import com.svm.management.loginsystem.domain.LoginUser;


@XmlRootElement
public class Users {
	private List<LoginUser> users = new ArrayList<LoginUser>();

	public Users(Iterable<LoginUser> all) {
		for(LoginUser user: all) {
			users.add(user);
		}
	}
}
