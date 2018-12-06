/**
 * Form validation using jquery
 */

$(document).ready(function() {
	$("#fileuploadform_errorloc").hide();
	$("#login_errorloc").hide();
	$("#signUp_errorloc").hide();
	$("#serverConfigform_errorloc").hide();
	$("#atlasConfigForm_errorloc").hide();
	$("#atlasDomainConfigForm_errorloc").hide();
	$("#atlasServiceInfoConfigForm_errorloc").hide();
	$("#hiloConfigForm_errorloc").hide();
	$("#dsAuthConfigForm_errorloc").hide();
	$("#hiloDSConfigForm_errorloc").hide();
	$("#handlerConfigForm_errorloc").hide();
    $("#servicehandlerConfigForm_errorloc").hide();
	$("#hconfigform_errorloc").hide();
	$("#istsfpropertyfileform_errorloc").hide();
	$("#jbossHeapform_errorloc").hide();
	$("#loggerForm_errorloc").hide();
	$("#userdbform_errorloc").hide();
	$("#CommonDb_errorloc").hide();
	$("#DSDb_errorloc").hide();
	$("#EnclDb_errorloc").hide();
	
	
	
	$("#LoginSave").click(function() {
		validateLogin();
	});
	$("#signupSave").click(function() {
		validateSignUP();
		
	});

	$("#FileUpload").click(function() {
		validateFileUpload();
	});

	$("#serverConfigSave").click(function() {
		validateServerConfig();
		$("#serverConfigform_message").show();
	});
	$("#handlerConfigSave").click(function() {
		validateHandlerConfig();
	});

	$("#servicehandlerConfigSave").click(function() {
		 validateServiceHandlerConfig();
		
	});

	
	
	
	$("#AtlasSave").click(function() {
		validateAtlasConfig();
	});
	$("#domainSave").click(function() {
		validateAtlasDomainConfig();
	});
	$("#serviceInfoSave").click(function() {
		validateAtlasServiceInfoConfig();
	});
	$("#hiloSave").click(function() {
		validateHiloConfig();
	});
	$("#dsSave").click(function() {

		validateDsAuthConfig();
	});
	$("#DSJndiave").click(function() {
		validateHiloDSConfig();
	});
	
	$("#istsfSave").click(function() {
		validateIstsfConfig();
	});
	
	$("#jbossheapsize").click(function() {
		validateJbossHeapSizeform();
	});
	
	
	$("#loggerSave").click(function() {
		validateLoggerConfig();
	});
	
	$("#userdbsave").click(function() {
		validateUserSpecificDb();
	});

	
	$("#commonsave").click(function() {
		validateCommonDb();
	});
	
	$("#DSsave").click(function() {
		validateDSDb();
	});
	
	$("#enclsave").click(function() {
		validateEnclDb();
	});
	
});
function showdiv() {
	$("#fileuploadform_errorloc").show();
	$("#login_errorloc").show();
	$("#signUp_errorloc").show();
	$("#serverConfigform_errorloc").show();
	$("#atlasConfigForm_errorloc").show();
	$("#atlasDomainConfigForm_errorloc").show();
	$("#atlasServiceInfoConfigForm_errorloc").show();
	$("#hiloConfigForm_errorloc").show();
	$("#dsAuthConfigForm_errorloc").show();
	$("#hiloDSConfigForm_errorloc").show();
	$("#handlerConfigForm_errorloc").show();
	$("#servicehandlerConfigForm_errorloc").show();
	$("#hconfigform_errorloc").show();
	$("#istsfpropertyfileform_errorloc").show();
	$("#jbossHeapform_errorloc").show();
	$("#loggerForm_errorloc").show();
	$("#userdbform_errorloc").show();
	$("#CommonDb_errorloc").show();
	$("#DSDb_errorloc").show();
	$("#EnclDb_errorloc").show();
	$("#serverConfigform_message").hide();
}
function validateLogin() {

	var frmvalidator = new Validator("login");
	frmvalidator.addValidation("application_Id", "req", " Application Id is Mandatory.");
	frmvalidator.addValidation("application_Id", "num"," Application Id must be Numeric,");
	frmvalidator.addValidation("application_Id", "maxlen=4","Max length for Application Id is 4");
	frmvalidator.addValidation("application_Name", "req", " Application Name is mandatory.");	
	frmvalidator.addValidation("application_Name", "maxlen=50","Max length for Application Name is 50");
	frmvalidator.EnableOnPageErrorDisplaySingleBox();
	frmvalidator.EnableMsgsTogether();
}
function validateSignUP() {
	var frmvalidator = new Validator("signUp");
	frmvalidator.addValidation("application_Id", "req", " Application Id is Mandatory.");
	frmvalidator.addValidation("application_Id", "num"," Application Id must be Numeric,");
	frmvalidator.addValidation("application_Id", "maxlen=4","Max length for Application Id is 4");
	frmvalidator.addValidation("application_Name", "req", " Application Name is mandatory.");
	frmvalidator.addValidation("application_Name", "maxlen=50","Max length for Application Name is 50");
	frmvalidator.EnableOnPageErrorDisplaySingleBox();
	frmvalidator.EnableMsgsTogether();
}

function validateFileUpload() {
	var frmvalidator = new Validator("fileuploadform");
	frmvalidator.addValidation("server", "req", "Server.xml is Mandatory.");
	frmvalidator.addValidation("atlasJbossService", "req", "AtlasJbossService.xml is Mandatory.");
	frmvalidator.addValidation("hilojbossService", "req", "HiloJbossService.xml is Mandatory.");
	frmvalidator.addValidation("istsfPropertyFile", "req", "IstsfPropertyFile.properties is Mandatory.");
	frmvalidator.addValidation("loginConfig", "req", "LoginConfig.xml is Mandatory.");
	frmvalidator.addValidation("Commonconnection", "req", "CommonConnection data Source File is Mandatory.");
	frmvalidator.EnableOnPageErrorDisplaySingleBox();
	frmvalidator.EnableMsgsTogether();
}
function validateServerConfig() {
	var frmvalidator = new Validator("serverConfigform");
	
	frmvalidator.addValidation("management_NativePort", "req","Management Native Port is Mandatory.");
	frmvalidator.addValidation("management_NativePort", "num"," Management Native Port must be Numeric");
	frmvalidator.addValidation("management_NativePort", "maxlen=4","Max length for Management NativePort is 4");
	frmvalidator.addValidation("management_HttpPort", "req","Management Http Port is Mandatory.");
	frmvalidator.addValidation("management_HttpPort", "num"," Management Http Port must be Numeric is Mandatory.");
	frmvalidator.addValidation("management_HttpPort", "maxlen=4","Max length for Management Http Port is 4");
	frmvalidator.addValidation("management_HttpsPort", " ","Management Https Port is Mandatory.");
	frmvalidator.addValidation("management_HttpsPort", "num"," Management Https Port must be Numeric ");
	frmvalidator.addValidation("management_HttpsPort", "maxlen=4","Max length for management Https Port is 4");
	frmvalidator.addValidation("ajp_Port", "req", "Ajp Port is Mandatory.");
	frmvalidator.addValidation("ajp_Port", "num", " Ajp Port must be Numeric,");
	frmvalidator.addValidation("ajp_Port", "maxlen=4","Max length for Ajp Port is 4");
	frmvalidator.addValidation("http_Port", "req", "Http Port is Mandatory.");
	frmvalidator.addValidation("http_Port", "num", " Http Port must be Numeric,");
	frmvalidator.addValidation("http_Port", "maxlen=4","Max length for http_Port is 4");
	frmvalidator.addValidation("https_Port", "req", "Https Port is Mandatory.");
	frmvalidator.addValidation("https_Port", "num", " Https Port must be Numeric,");
	frmvalidator.addValidation("https_Port", "maxlen=4","Max length for Https Port is 4");
	frmvalidator.addValidation("remote_Port", "req", "Remote Port is Mandatory.");
	frmvalidator.addValidation("remote_Port", "num"," Remote Port must be Numeric,");
	frmvalidator.addValidation("remote_Port", "maxlen=4","Max length for Remote Port is 4");
	frmvalidator.addValidation("jndi_Port", "req", "Jndi Port is Mandatory.");
	frmvalidator.addValidation("jndi_Port", "num", " Jndi Port must be Numeric.");
	frmvalidator.addValidation("jndi_Port", "maxlen=4","Max length for Jndi Port is 4");
	frmvalidator.addValidation("txn_Recovery_Environment", "req","Txn Recovery Environment is Mandatory.");
	frmvalidator.addValidation("txn_Recovery_Environment", "num"," Txn Recovery Environment must be Numeric ");
	frmvalidator.addValidation("txn_Recovery_Environment", "maxlen=4","Max length for Txn Recovery Environment is 4");
	frmvalidator.addValidation("hosName", "maxlen=200","Max length for Host Name is 200");
	frmvalidator.addValidation("hosName", "req", "Host Name is Mandatory.");
	frmvalidator.addValidation("txnStatusManager", "req", "Txn Status Manager is Mandatory.");
	frmvalidator.addValidation("txnStatusManager", "num"," Txn Status Manager must be Numeric.");
	frmvalidator.addValidation("txnStatusManager", "maxlen=4","Max length for Txn Status Manager is 4");
	frmvalidator.addValidation("deploymentTime", "req", "Deployment Time is Mandatory.");
	frmvalidator.addValidation("deploymentTime", "num"," Deployment Time must be Numeric");
	frmvalidator.addValidation("deploymentTime", "maxlen=4","Max length for Deployment Time is 4");
	frmvalidator.addValidation("port_Offset", "req", "Port Offset is Mandatory.");
	frmvalidator.addValidation("port_Offset", "num"," Port Offset must be Numeric");
	frmvalidator.addValidation("port_Offset", "maxlen=4","Max length for Port Offset is 4");
	frmvalidator.addValidation("threadCount", "req", "Thread Count is Mandatory.");
	frmvalidator.addValidation("threadCount", "num"," Thread Count must be Numeric");
	frmvalidator.addValidation("threadCount", "maxlen=4",	"Max length for Thread Count is 4");
	frmvalidator.addValidation("envConfigId", "req", "EnvConfig Id is Mandatory.");
	frmvalidator.EnableOnPageErrorDisplaySingleBox();
	frmvalidator.EnableMsgsTogether();
}
function validateHandlerConfig() {
	var frmvalidator = new Validator("handlerConfigForm");
	frmvalidator.addValidation("serverHandlerType", "dontselect=000", "Handler Type is mandatory.");
	//frmvalidator.addValidation("serviceHandlerType", "dontselect=000", "Handler Type is mandatory.");
	frmvalidator.addValidation("handlerName", "req", "Handler Name is mandatory.");
	frmvalidator.addValidation("handlerName", "maxlen=50","Max length for handler name is 50");
	frmvalidator.addValidation("level", "dontselect=000", "Level is Mandatory.");
	frmvalidator.addValidation("append", "dontselect=0", "Append is Mandatory.");
	frmvalidator.addValidation("pattern", "req", "Pattern is Mandatory.");
	frmvalidator.addValidation("pattern", "maxlen=300","Max length for pattern is 300");
	frmvalidator.addValidation("serverFilePath", "req", "FilePath is Mandatory.");
	frmvalidator.addValidation("serverFilePath", "maxlen=100","Max length for file Path is 100");
	//frmvalidator.addValidation("servicelogFilePath", "req", "FilePath is Mandatory.");
	//frmvalidator.addValidation("servicelogFilePath", "maxlen=100","Max length for file Path is 100");
	frmvalidator.addValidation("rotation", "maxlen=50","Max length for rotation is 50");
	frmvalidator.addValidation("rotation", "req", "Rotation policy  is mandatory.");
	frmvalidator.addValidation("flush", "dontselect=0", "Flush is Mandatory.");
	frmvalidator.addValidation("serverConfigId", "req", "ServerConfig Id is Mandatory.");
	frmvalidator.EnableOnPageErrorDisplaySingleBox();
	frmvalidator.EnableMsgsTogether();
}


function validateServiceHandlerConfig() {
	var frmvalidator = new Validator("servicehandlerConfigForm");
	//frmvalidator.addValidation("serverHandlerType", "dontselect=000", "Handler Type is mandatory.");
	frmvalidator.addValidation("serviceHandlerType", "dontselect=000", "Handler Type is mandatory.");
	frmvalidator.addValidation("handlerName", "req", "Handler Name is mandatory.");
	frmvalidator.addValidation("handlerName", "maxlen=50","Max length for handler name is 50");
	frmvalidator.addValidation("level", "dontselect=000", "Level is Mandatory.");
	frmvalidator.addValidation("append", "dontselect=0", "Append is Mandatory.");
	frmvalidator.addValidation("pattern", "req", "Pattern is Mandatory.");
	frmvalidator.addValidation("pattern", "maxlen=300","Max length for pattern is 300");
	//frmvalidator.addValidation("serverFilePath", "req", "FilePath is Mandatory.");
	//frmvalidator.addValidation("serverFilePath", "maxlen=100","Max length for file Path is 100");
	frmvalidator.addValidation("servicelogFilePath", "req", "FilePath is Mandatory.");
	frmvalidator.addValidation("servicelogFilePath", "maxlen=100","Max length for file Path is 100");
	frmvalidator.addValidation("rotation", "maxlen=50","Max length for rotation is 50");
	frmvalidator.addValidation("rotation", "req", "Rotation policy  is mandatory.");
	frmvalidator.addValidation("flush", "dontselect=0", "Flush is Mandatory.");
	frmvalidator.addValidation("serverConfigId", "req", "ServerConfig Id is Mandatory.");
	frmvalidator.EnableOnPageErrorDisplaySingleBox();
	frmvalidator.EnableMsgsTogether();
}



function validateLoggerConfig() {
	var frmvalidator = new Validator("loggerForm");
	frmvalidator.addValidation("loggerConfigList1.category_Type", "dontselect=000", "Category is mandatory.");
	frmvalidator.addValidation("HanlerFirst", "dontselect=000", "Handler is Mandatory.");
	frmvalidator.addValidation("loggerConfigList1.level", "dontselect=000", "Level is Mandatory.");
	frmvalidator.addValidation("parentHanlerFirst", "dontselect=0", "Use Parent Handler is Mandatory.");
	frmvalidator.addValidation("loggerConfigList2.category_Type", "dontselect=000", "Category is mandatory.");
	frmvalidator.addValidation("HanlerSecond", "dontselect=000", "Handler is Mandatory.");
	frmvalidator.addValidation("loggerConfigList2.level", "dontselect=000", "Level is Mandatory.");
	frmvalidator.addValidation("parentHanlerSecond", "dontselect=0", "Use Parent Handler is Mandatory.");
	frmvalidator.addValidation("loggerConfigList3.category_Type", "dontselect=000", "Category is mandatory.");
	frmvalidator.addValidation("HandlerThird", "dontselect=000", "Handler is Mandatory.");
	frmvalidator.addValidation("loggerConfigList3.level", "dontselect=000", "Level is Mandatory.");
	frmvalidator.addValidation("loggerConfigList3.level", "dontselect=000", "Level is Mandatory.");
	frmvalidator.addValidation("parentHanlerthird","dontselect=0", "Use Parent Handler is Mandatory.");
	frmvalidator.addValidation("loggerConfigList[0].handler_Type","selone_radio", "Handler Type is Mandatory.");
	frmvalidator.addValidation("serverConfigId", "req", "ServerConfigId Id is Mandatory.");
	frmvalidator.EnableOnPageErrorDisplaySingleBox();
	frmvalidator.EnableMsgsTogether();
}

function validateAtlasConfig() {
	var frmvalidator = new Validator("atlasConfigForm");
	frmvalidator.addValidation("frequency", "req", "Frequency is Mandatory.");
	frmvalidator.addValidation("frequency", "num", " Frequency must be Numeric");
	frmvalidator.addValidation("frequency", "maxlen=50","Max length for frequency is 50");
	frmvalidator.addValidation("thresHoldCount", "req", "Threshold Count is Mandatory.");
	frmvalidator.addValidation("thresHoldCount", "num"," Threshold Count must be Numeric");
	frmvalidator.addValidation("thresHoldCount", "maxlen=4","Max length for threshold count is 50");
	frmvalidator.addValidation("pingSocketTimeOut", "req", "Ping Socket TimeOut is Mandatory.");
	frmvalidator.addValidation("pingSocketTimeOut", "num"," Ping Socket TimeOut must be Numeric ");
	frmvalidator.addValidation("pingSocketTimeOut", "maxlen=50","Max length for ping socket timeout is 50");
	frmvalidator.addValidation("expiryToleranceFactor", "req","Expiry Tolerance Factor is Mandatory.");
	frmvalidator.addValidation("expiryToleranceFactor", "num"," Expiry Tolerance Factor must be Numeric ");
	frmvalidator.addValidation("expiryToleranceFactor", "maxlen=50","Max length for expiry tolerance factor is 50");
	frmvalidator.addValidation("host", "req", "Host is Mandatory.");
	frmvalidator.addValidation("host", "maxlen=200", "Max length for host is 200");
	frmvalidator.addValidation("port", "req", "Port is Mandatory.");
	frmvalidator.addValidation("port", "num", " Port must be Numeric");
	frmvalidator.addValidation("port", "maxlen=50", "Max length for port is 50");
	frmvalidator.addValidation("serviceName", "req", "Service Name is Mandatory.");
	frmvalidator.addValidation("serviceName", "maxlen=50","Max length for service name is 50");
	frmvalidator.addValidation("envConfigId", "req", "EnvConfig Id is Mandatory.");
	frmvalidator.EnableOnPageErrorDisplaySingleBox();
	frmvalidator.EnableMsgsTogether();
}
function validateAtlasDomainConfig() {
	var frmvalidator = new Validator("atlasDomainConfigForm");
	frmvalidator.addValidation("appName", "req", "App Name is Mandatory.");
	frmvalidator.addValidation("appName", "maxlen=50","Max length for app name is 50");
	frmvalidator.addValidation("serverName", "req", "Server Name is Mandatory.");
	frmvalidator.addValidation("serverName", "maxlen=50","Max length for server name is 50");
	frmvalidator.addValidation("atlasConfigId", "req", "atlasConfig Id is Mandatory.");

	frmvalidator.EnableOnPageErrorDisplaySingleBox();
	frmvalidator.EnableMsgsTogether();
}
function validateAtlasServiceInfoConfig() {
	var frmvalidator = new Validator("atlasServiceInfoConfigForm");
	frmvalidator.addValidation("hostName", "req", "Host Name is Mandatory.");
	frmvalidator.addValidation("hostName", "maxlen=200","Max length for host name is 200");
	frmvalidator.addValidation("port", "req", "Port is Mandatory.");
	frmvalidator.addValidation("port", "num", " Port must be Numeric");
	frmvalidator.addValidation("port", "maxlen=50", "Max length for port is 50");
	frmvalidator.addValidation("serviceName", "req", "Service Name is Mandatory.");
	frmvalidator.addValidation("serviceName", "maxlen=50","Max length for service name is 50");
	frmvalidator.addValidation("atlasConfigId", "req", "atlasConfig Id is Mandatory.");
	frmvalidator.EnableOnPageErrorDisplaySingleBox();
	frmvalidator.EnableMsgsTogether();
}
function validateHiloConfig() {
	var frmvalidator = new Validator("hconfigform");
	frmvalidator.addValidation("jsqlEnable", "dontselect=0", "Jsql Enable is Mandatory.");
	frmvalidator.addValidation("multiThreaded", "dontselect=0", "MultiThreaded is Mandatory.");
	frmvalidator.addValidation("authMode", "dontselect=0", "Auth Mode is Mandatory.");
	frmvalidator.addValidation("authMode", "maxlen=50","Max length for authetication mode is 50");
	frmvalidator.addValidation("hiloJndiName", "req", "Hilo Jndi Name is Mandatory.");
	frmvalidator.addValidation("hiloJndiName", "maxlen=50","Max length for hilo jndi name is 50");
	frmvalidator.addValidation("cppConfigPath", "req", "cpp Config File Path is Mandatory.");
	frmvalidator.addValidation("appPropertyFile", "maxlen=50","Max length for app property file is 50");
	frmvalidator.addValidation("port", "req", "Port is Mandatory.");
	frmvalidator.addValidation("port", "num", " Port must be Numeric");
	frmvalidator.addValidation("port", "maxlen=4", "Max length for port is 50");
	frmvalidator.addValidation("sslPort", "req", "ssl Port is Mandatory.");
	frmvalidator.addValidation("sslPort", "num", " ssl Port must be Numeric");
	frmvalidator.addValidation("sslPort", "maxlen=4", "Max length for ssl Port is 50");
	frmvalidator.addValidation("compressThresHold", "req", "compress ThresHold  is Mandatory.");
	frmvalidator.addValidation("compressThresHold", "num", " compress ThresHold  must be Numeric");
	frmvalidator.addValidation("compressThresHold", "maxlen=5", "Max length for compress ThresHold  is 5");
	frmvalidator.addValidation("sslEnable", "dontselect=0", "sslEnable  is Mandatory.");
	frmvalidator.addValidation("timeOutMs", "req", "Timeout is Mandatory.");
	frmvalidator.addValidation("timeOutMs", "num", " Timeout must be Numeric,");
	frmvalidator.addValidation("timeOutMs", "maxlen=50","Max length for timeout is 50");
	frmvalidator.addValidation("socketReadTimeOut", "req", "Socket Read Timeout is Mandatory.");
	frmvalidator.addValidation("socketReadTimeOut", "num", " Socket Read Timeout must be Numeric");
	frmvalidator.addValidation("socketReadTimeOut", "maxlen=50","Max length for Socket Read Timeout is 50");
	frmvalidator.addValidation("reqProcessPoolSize", "req","Req Process Pool Size is Mandatory.");
	frmvalidator.addValidation("reqProcessPoolSize", "num", " Req Process Pool Size must be Numeric");
	frmvalidator.addValidation("reqProcessPoolSize", "maxlen=50","Max length for Req Process Pool Size is 50");
	frmvalidator.addValidation("synPreLogintxn", "dontselect=0", "Syn Prelogin txn is Mandatory.");
	frmvalidator.addValidation("appDataSourceName", "req", "App DataSource Name is Mandatory.");
	frmvalidator.addValidation("appDataSourceName", "maxlen=50","Max length for App DataSource Name is 50");
	frmvalidator.addValidation("dsEnvironment", "req", "DS Environment is Mandatory.");
	frmvalidator.addValidation("dsEnvironment", "maxlen=50","Max length for DS Environment is 50");
	frmvalidator.addValidation("ssoKeyChain", "dontselect=0", "SSO KeyChain is Mandatory.");
	frmvalidator.addValidation("profiling", "dontselect=0", "Profiling is Mandatory.");
	frmvalidator.addValidation("actionManager", "dontselect=0", "ActionManager is Mandatory.");
	frmvalidator.addValidation("bamEnable", "dontselect=0", "Bam Enable is Mandatory.");
	frmvalidator.addValidation("transactionReports", "dontselect=0","Transaction Reports is Mandatory.");
	frmvalidator.addValidation("bamURL", "req", "BamURL is Mandatory.");
	frmvalidator.addValidation("bamURL", "maxlen=200","Max length for BamURL is 200");
	frmvalidator.addValidation("bamAppSign", "maxlen=50","Max length for Bam AppSign is 50");
	frmvalidator.addValidation("bamPPServerName", "maxlen=50","Max length for BamPP Server Name is 50");
	frmvalidator.addValidation("bamSessionCount", "dontselect=0", "Bam Session Count is Mandatory.");
	frmvalidator.addValidation("reporting", "dontselect=0", "Reporting is Mandatory.");
	frmvalidator.addValidation("reprotingDIR", "req", "Reproting DIR is Mandatory.");
	frmvalidator.addValidation("reprotingDIR", "maxlen=50","Max length for Reproting DIR is 50");
	frmvalidator.addValidation("xmlReport", "dontselect=0", "Xml Report is Mandatory.");
	frmvalidator.addValidation("reportAllUser", "dontselect=0", "Report All User is Mandatory.");
	frmvalidator.addValidation("reportDelimeter", "req", "Report Delimeter is Mandatory.");
	frmvalidator.addValidation("reportDelimeter", "maxlen=50","Max length for Report Delimeter is 50");
	frmvalidator.addValidation("prsIdReloadFreq", "req", "PrsId Reload Freq is Mandatory");
	frmvalidator.addValidation("prsIdReloadFreq", "maxlen=50","Max length for PrsId Reload Freq is 50");
	frmvalidator.addValidation("prsIdFilePath", "req", "PrsId File Path is Mandatory.");
	frmvalidator.addValidation("prsIdFilePath", "maxlen=50","Max length for PrsId File Path is 50");
	frmvalidator.addValidation("reportFlushSize", "req", "Report Flush Size is Mandatory.");
	frmvalidator.addValidation("reportFlushSize", "num", " Report Flush Size must be Numeric");
	frmvalidator.addValidation("reportFlushSize", "maxlen=50","Max length for Report Flush Size is 50");
	frmvalidator.addValidation("reportFlushSize", "greaterthan=0","Report Flush Size must be greater than 0");
	frmvalidator.addValidation("reportRetainingDays", "req","Report Retaining Days is Mandatory.");
	frmvalidator.addValidation("reportRetainingDays", "num", " Report Retaining Days must be Numeric");
	frmvalidator.addValidation("reportRetainingDays", "maxlen=50","Max length for Report Retaining Days is 50");
	frmvalidator.addValidation("httpSynpreLoginTxn", "dontselect=0","Http Syn prelogin Txn is Mandatory.");
	frmvalidator.addValidation("stopPublishMessage", "req",	"Stop Publish Message is Mandatory.");
	frmvalidator.addValidation("stopPublishMessage", "maxlen=200","Max length for Stop Publish Message is 50");
	frmvalidator.addValidation("forceShoutDownTime", "req","Force ShoutDown Time is Mandatory.");
	frmvalidator.addValidation("forceShoutDownTime", "num", " Force ShoutDown Time must be Numeric ");
	frmvalidator.addValidation("forceShoutDownTime", "maxlen=50","Max length for Force ShoutDown Time is 50");
	frmvalidator.addValidation("loggerNamePrefix", "req", "Logger Name Prefix is Mandatory.");
	frmvalidator.addValidation("loggerNamePrefix", "maxlen=50","Max length for Logger Name Prefix is 50");
	frmvalidator.addValidation("xmlLogging", "dontselect=0", "Xml Logging is Mandatory.");
	frmvalidator.addValidation("requestORResponseXml", "req","Request OR Response Xml is Mandatory.");
	frmvalidator.addValidation("requestORResponseXml", "maxlen=50","Max length for Request OR Response Xml is 50");
	frmvalidator.addValidation("individualPrsFile", "dontselect=0", "IndividualPrsFile  is Mandatory.");
	frmvalidator.addValidation("envConfigId", "req", "EnvConfig Id is Mandatory.");
	frmvalidator.EnableOnPageErrorDisplaySingleBox();
	frmvalidator.EnableMsgsTogether();
}
function validateDsAuthConfig() {
	var frmvalidator = new Validator("dsAuthConfigForm");
	frmvalidator.addValidation("dsAuthEnvironment", "dontselect=0", "DS Auth Environment is Mandatory.");
	frmvalidator.addValidation("dsAuthAppName", "req", "DS Auth App Name is Mandatory.");
	frmvalidator.addValidation("dsAuthAppName", "maxlen=50","Max length for DS Auth AppName is 50");
	frmvalidator.addValidation("dsAuthAppId", "req", "DS Auth App Id,");
	frmvalidator.addValidation("dsAuthAppId", "num", " DS Auth App Id must be Numeric");
	frmvalidator.addValidation("dsAuthAppId", "maxlen=50","Max length for DS Auth App Id is 50");
	frmvalidator.addValidation("appPassword", "req", "App Password is Mandatory.");
	frmvalidator.addValidation("appPassword", "maxlen=500","Max length for App Password is 500");
	frmvalidator.addValidation("dsAuthCPP", "dontselect=0", "DS CPP is Mandatory.");
	frmvalidator.addValidation("appSpecificDSAuthAppName", "req", "Application Specific App Name is Mandatory.");
	frmvalidator.addValidation("appSpecificDSAuthAppName", "maxlen=50","Max length for Application Specific AppName is 50");
	frmvalidator.addValidation("appSpecificDSAuthAppId", "req", "Application Specific App Id is mandatory.");
	frmvalidator.addValidation("appSpecificDSAuthAppId", "num", "Application Specific App Id must be Numeric");
	frmvalidator.addValidation("appSpecificDSAuthAppId", "maxlen=50","Max length for Application Specific App Id is 50");
	frmvalidator.addValidation("appSpecificDSPassword", "Application Specific Password is Mandatory.");
	frmvalidator.addValidation("appSpecificDSPassword", "maxlen=500","Max length for App Specific  Password is 500");
	frmvalidator.addValidation("appSpecificDSAuthCPP", "dontselect=0", "Application Specific CPP is Mandatory.");
	frmvalidator.addValidation("hiloConfigId", "req", "HiloConfig Id is Mandatory.");

	frmvalidator.EnableOnPageErrorDisplaySingleBox();
	frmvalidator.EnableMsgsTogether();
}
function validateHiloDSConfig() {
	var frmvalidator = new Validator("hiloDSConfigForm");
	frmvalidator.addValidation("defaultJndi", "req", "Default Jndi is Mandatory.");
	frmvalidator.addValidation("defaultJndi", "maxlen=50","Max length for Default Jndi is 50");
	frmvalidator.addValidation("appName", "req", "App Name is Mandatory.");
	frmvalidator.addValidation("appName", "maxlen=50","Max length for App Name is 50");
	frmvalidator.addValidation("appId", "req", "App Id is Mandatory");
	frmvalidator.addValidation("appId", "num", " App Id must be Numeric");
	frmvalidator.addValidation("appId", "maxlen=50","Max length for App Id is 50");
	frmvalidator.addValidation("commonConnection", "dontselect=0", "Common Connection is Mandatory.");
	frmvalidator.addValidation("dataSourceName", "req", "Data Source Name  is Mandatory.");
	frmvalidator.addValidation("dataSourceName", "maxlen=50","Max length for Data Source Name is 50.");
	frmvalidator.addValidation("dataBaseAlertName", "req", "DataBase Alert Name  is Mandatory.");
	frmvalidator.addValidation("dataBaseAlertName", "maxlen=50","Max length for DataBase Alert Name is 50.");
	frmvalidator.addValidation("waitTimeForReconnection", "req", "WaitTime For Reconnection  is Mandatory.");
	frmvalidator.addValidation("waitTimeForReconnection", "num", " WaitTime For Reconnectionmust be Numeric.");
	frmvalidator.addValidation("waitTimeForReconnection", "maxlen=50","Max length for WaitTime For Reconnection is 50");
	frmvalidator.addValidation("alertTimeOut", "req", "Alert Time Out is Mandatory.");
	frmvalidator.addValidation("alertTimeOut", "num", "Alert Time Out must be numerics.");
	frmvalidator.addValidation("alertTimeOut", "maxlen=50","Max length for Alert Time Out is 50.");
	frmvalidator.addValidation("hiloConfigId", "req", "HiloConfig Id is Mandatory.");
	frmvalidator.EnableOnPageErrorDisplaySingleBox();
	frmvalidator.EnableMsgsTogether();
}


function validateIstsfConfig() {
	var frmvalidator = new Validator("istsfpropertyfileform");
	frmvalidator.addValidation("dbTnsName", "req", "DB Transaction Name is Mandatory.");
	frmvalidator.addValidation("dbTnsName", "maxlen=50","Max length for DbTnsName is 50");
	frmvalidator.addValidation("jdbcFetchSize", "req", "Jdbc Fetch Size is Mandatory.");
	frmvalidator.addValidation("jdbcFetchSize", "num", " Jdbc Fetch Size must be Numeric");
	frmvalidator.addValidation("jdbcFetchSize", "maxlen=50","Max length for Jdbc Fetch Size is 50");
	frmvalidator.addValidation("queryTimeOut", "req", "Query Timeout is Mandatory.");
	frmvalidator.addValidation("queryTimeOut", "maxlen=50","Max length for Query Timeout is 50");
	frmvalidator.addValidation("queryTimeOut", "num", " Query Timeout must be Numeric");
	frmvalidator.addValidation("dbObjectsPath", "req", "DB Objects Path is Mandatory.");
	frmvalidator.addValidation("dbObjectsPath", "maxlen=500","Max length for DB Objects Path is 500");
	frmvalidator.addValidation("socketIdleTimeout", "req", "Socket Idle Timeout is Mandatory.");
	frmvalidator.addValidation("socketIdleTimeout", "maxlen=50","Max length for Socket Idle Timeout is 50");
	frmvalidator.addValidation("socketIdleTimeout", "num", " Socket Idle Timeout must be Numeric");
	frmvalidator.addValidation("errorMessagePath", "req", "Error Message Path is Mandatory.");
	frmvalidator.addValidation("errorMessagePath", "maxlen=500","Max length for Socket Idle Timeout is 500");
	frmvalidator.addValidation("istsfErrorMesaagePath", "req", "Istsf Error Mesaage Path is Mandatory.");
	frmvalidator.addValidation("istsfErrorMesaagePath", "maxlen=500","Max length for Istsf Error Mesaage Path is 500");
	frmvalidator.addValidation("customBatch", "dontselect=0", "Custom Batch is Mandatory.");
	frmvalidator.addValidation("dbObjectFormat", "req", "Db Object Format is Mandatory.");
	frmvalidator.addValidation("dbObjectFormat", "maxlen=500","Max length for Db Object Format is 500");
	frmvalidator.addValidation("appId", "maxlen=50","Max length for Application Id is 50");
	frmvalidator.addValidation("appId", "num", " Application Id must be Numeric");
	frmvalidator.addValidation("password", "maxlen=500","Max length for Password is 500");
	frmvalidator.addValidation("appId", "num", " Password must be Numeric");
	frmvalidator.addValidation("sspEndPoint", "maxlen=100","Max length for SSP End Point is 100");
	frmvalidator.addValidation("sspEnv", "maxlen=50","Max length for SSP Env is 50");
	frmvalidator.addValidation("sspRequestAuthoXml", "maxlen=100","Max length for SSP Request Autho Xml is 100");
	frmvalidator.addValidation("sspRequestXml", "maxlen=100","Max length for SSP Request Xml is 100");
	frmvalidator.addValidation("schemaName", "maxlen=500","Max length for Schema Name is 500");
	frmvalidator.addValidation("appUsingSchemaName", "maxlen=500","Max length for App Using Schema Name is 500");
	frmvalidator.addValidation("showActualErrorMsg", "dontselect=0");
	frmvalidator.addValidation("enableCache", "dontselect=0", "Enable Cache is Mandatory.");
	frmvalidator.addValidation("envConfigId", "req", "EnvConfig Id is Mandatory.");
	frmvalidator.EnableOnPageErrorDisplaySingleBox();
	frmvalidator.EnableMsgsTogether();
}

function validateJbossHeapSizeform() {
	var frmvalidator = new Validator("jbossHeapform");
	frmvalidator.addValidation("environmentId", "req", "environment Id is Mandatory.");
	frmvalidator.EnableOnPageErrorDisplaySingleBox();
	frmvalidator.EnableMsgsTogether();
}


function validateUserSpecificDb() {
	var frmvalidator = new Validator("userdbform");
	frmvalidator.addValidation("jndiName", "req", " Jndi Name is Mandatory.");
	frmvalidator.addValidation("jndiName", "maxlen=50","Max length for jndi name id is 50");
	frmvalidator.addValidation("hostName", "req", " Host Name is mandatory.");
	frmvalidator.addValidation("hostName", "maxlen=200","Max length for Host Name is 200");
	frmvalidator.addValidation("port", "req", " Port Name is mandatory.");
	frmvalidator.addValidation("port", "num", " Port must be numeric.");
	frmvalidator.addValidation("sid", "req", " Sid Name is mandatory.");
	frmvalidator.addValidation("minPoolSize", "num", " Min Pool Size must be numeric.");
	frmvalidator.addValidation("minPoolSize", "req", " Min Pool Size is mandatory.");
	frmvalidator.addValidation("maxPoolSize", "num", " Max Pool Size must be numeric.");
	frmvalidator.addValidation("maxPoolSize", "req", " Max Pool Size is mandatory.");
	frmvalidator.addValidation("idleTimeout", "num", " Idle Timeout must be numeric.");
	frmvalidator.addValidation("idleTimeout", "req", " Idle Timeout is mandatory.");
	frmvalidator.addValidation("securityName", "maxlen=50", " Max lenght for Security Name is 45.");
	frmvalidator.addValidation("securityName", "req", " Security Name is Mandatory.");
	frmvalidator.addValidation("serverConfigId", "req", "ServerConfigId Id is Mandatory.");

	
	frmvalidator.EnableOnPageErrorDisplaySingleBox();
	frmvalidator.EnableMsgsTogether();
}


function validateCommonDb() {
	var frmvalidator = new Validator("CommonDb");
	frmvalidator.addValidation("jndiName", "req", " Jndi Name is Mandatory.");
	frmvalidator.addValidation("jndiName", "maxlen=50","Max length for jndi name id is 50");
	frmvalidator.addValidation("hostName", "req", " Host Name is mandatory.");
	frmvalidator.addValidation("hostName", "maxlen=200","Max length for Host Name is 200");
	frmvalidator.addValidation("port", "req", " Port Name is mandatory.");
	frmvalidator.addValidation("port", "num", " Port must be numeric.");
	frmvalidator.addValidation("sid", "req", " Sid Name is mandatory.");
	frmvalidator.addValidation("minPoolSize", "num", " Min Pool Size must be numeric.");
	frmvalidator.addValidation("minPoolSize", "req", " Min Pool Size is mandatory");
	frmvalidator.addValidation("maxPoolSize", "num", " Max Pool Size must be numeric.");
	frmvalidator.addValidation("maxPoolSize", "req", " Max Pool Size is mandatory");
	frmvalidator.addValidation("idleTimeout", "num", " Idle Timeout must be numeric.");
	frmvalidator.addValidation("idleTimeout", "req", " Idle Timeout is mandatory");
	frmvalidator.addValidation("securityName", "maxlen=50", " Max length for Security Name is 50.");
	frmvalidator.addValidation("securityName", "req", " Security Name is mandatory.");
	frmvalidator.addValidation("userName", "maxlen=50", " Max length for user name is 50.");
	frmvalidator.addValidation("userName", "req", " User name is mandatory");
	frmvalidator.addValidation("password", "req", " Password is mandatory.");
	frmvalidator.addValidation("serverConfigId", "req", "ServerConfigId Id is Mandatory.");

	frmvalidator.EnableOnPageErrorDisplaySingleBox();
	frmvalidator.EnableMsgsTogether();
}


function validateEnclDb() {
	var frmvalidator = new Validator("EnclDb");
	frmvalidator.addValidation("jndiName", "req", " Jndi Name is Mandatory.");
	frmvalidator.addValidation("jndiName", "maxlen=50","Max length for jndi name id is 50");
	frmvalidator.addValidation("hostName", "req", " Host Name Name is mandatory.");
	frmvalidator.addValidation("hostName", "maxlen=200","Max length for Host Name is 200");
	frmvalidator.addValidation("port", "req", " Port Name is mandatory.");
	frmvalidator.addValidation("port", "num", " Port must be numeric.");
	frmvalidator.addValidation("sid", "req", " Sid Name is mandatory.");
	frmvalidator.addValidation("minPoolSize", "num", " Min Pool Size must be numeric.");
	frmvalidator.addValidation("minPoolSize", "req", " Min Pool Size is mandatory.");
	frmvalidator.addValidation("maxPoolSize", "num", " Max Pool Size must be numeric.");
	frmvalidator.addValidation("maxPoolSize", "req", " Max Pool Size is mandatory.");
	frmvalidator.addValidation("idleTimeout", "num", " Idle Timeout must be numeric.");
	frmvalidator.addValidation("idleTimeout", "req", " Idle Timeout must is mandatory.");
	frmvalidator.addValidation("serverConfigId", "req", "ServerConfigId Id is Mandatory.");

	frmvalidator.EnableOnPageErrorDisplaySingleBox();
	frmvalidator.EnableMsgsTogether();
}

function validateDSDb() {
	var frmvalidator = new Validator("DSDb");
	frmvalidator.addValidation("jndiName", "req", " Jndi Name is Mandatory.");
	frmvalidator.addValidation("jndiName", "maxlen=50","Max length for jndi name id is 50");
	frmvalidator.addValidation("hostName", "req", " Host Name is mandatory.");
	frmvalidator.addValidation("hostName", "maxlen=200","Max length for Host Name is 200");
	frmvalidator.addValidation("port", "req", " Port Name is mandatory.");
	frmvalidator.addValidation("port", "num", " Port must be numeric.");
	frmvalidator.addValidation("sid", "req", " Sid Name is mandatory.");
	frmvalidator.addValidation("minPoolSize", "num", " Min Pool Size must be numeric.");
	frmvalidator.addValidation("minPoolSize", "req", " Min Pool Size is mandatory.");
	frmvalidator.addValidation("maxPoolSize", "num", " Max Pool Size must be numeric.");
	frmvalidator.addValidation("maxPoolSize", "req", " Max Pool Size is mandatory");
	frmvalidator.addValidation("idleTimeout", "num", " Idle Timeout must be numeric.");
	frmvalidator.addValidation("idleTimeout", "req", " Idle Timeout is mandatory");
	frmvalidator.addValidation("serverConfigId", "req", "ServerConfigId Id is Mandatory.");

	frmvalidator.EnableOnPageErrorDisplaySingleBox();
	frmvalidator.EnableMsgsTogether();
}
