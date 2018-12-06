package com.svm.management.system.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

/**
 * The Class ServicesConfig.
 */
@Configuration
@Import(value = { DataConfig.class })
@ComponentScan(basePackages = { "com.svm.management.loginsystem.service" })
public class ServicesConfig {

}
