package com.svm.management.loginsystem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.svm.management.loginsystem.domain.LoginUser;


@Repository
public interface LoginRepository extends JpaRepository<LoginUser, Long>{

}
