package com.svm.management.loginsystem.controller;

import java.util.Locale;
import javax.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import com.svm.management.loginsystem.domain.LoginUser;
import com.svm.management.loginsystem.service.LoginService;

/**
 * @author ram Handles requests for the application login page.
 */
@Controller
@RequestMapping(value = "/doLogin")
@SessionAttributes({ "loginForm" })
public class LoginController {

    private static final Logger logger = LoggerFactory.getLogger(LoginController.class);

    @Autowired
    private LoginService        loginService;

    public LoginService getLoginService() {
        return loginService;
    }

    public void setLoginService(LoginService loginService) {
        this.loginService = loginService;
    }

    @ModelAttribute("loginUser")
    public LoginUser createForm() {
        logger.info("login create form");
        return new LoginUser();
    }

    
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String createForm(Locale locale) {
        logger.info("Show Login page");
        return "login.form";
    }

    /**
     * @param loginForm
     * @param bindingResult
     * @param request
     * @param sessionStatus
     * @param redirectAttributes
     * @return
     */
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String login(@Valid @ModelAttribute("loginUser") LoginUser loginUser, BindingResult bindingResult, WebRequest request,
            SessionStatus sessionStatus, RedirectAttributes redirectAttributes) {
        return "login.create.form";

    }

    @RequestMapping(value = "/signup", method = RequestMethod.GET)
    public String createSignUp(Locale locale) {
        logger.info("Show Login page");
        return "login.create.form";
    }

    /**
     * @param loginForm
     * @param bindingResult
     * @param request
     * @param sessionStatus
     * @param redirectAttributes
     * @return
     */
    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public String signUp(@Valid @ModelAttribute("loginUser") LoginUser loginUser, BindingResult bindingResult, WebRequest request,
            SessionStatus sessionStatus, RedirectAttributes redirectAttributes) {
        return "login.form";

    }

}
