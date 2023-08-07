package org.wms.web.models;

import java.time.LocalDate;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Project {
	
	@JsonProperty("Project_ID")
	private Long projectId;
	@JsonProperty("Project_Number")
	private String projectNumber;
	@JsonProperty("sourceOfFund")
	private String sourceOfFund;
	@JsonProperty("schemeNo")
	private String schemeNo;
	@JsonProperty("department")
	private String department;
	@JsonProperty("projectStatus")
	private String projectStatus;
	@JsonProperty("Project_Name_En")
	private String projectNameEn;
	@JsonProperty("Project_Name_Reg")
	private String projectNameReg;
	@JsonProperty("Project_Description")
	private String projectDescription;
	@JsonProperty("Project_Timeline")
	private String projectTimeline;
	@JsonProperty("Project_Start_Date")
	private LocalDate projectStartDate;
	@JsonProperty("Project_End_Date")
	private LocalDate projectEndDate;
	@JsonProperty("Scheme_Name")
	private String schemeName;
	@JsonProperty("Approval_Number")
	private String approvalNumber;
	@JsonProperty("Approval_Date")
	private LocalDate approvalDate;
	@JsonProperty("Status")
	private String status;
	
	
	

}
