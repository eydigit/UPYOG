package org.wms.web.models;

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
public class Work {
	@JsonProperty("workNo")
	private String workNo;
	@JsonProperty("workName")
	private String workName;
	@JsonProperty("projectName")
	private String projectName;
	@JsonProperty("departmentName")
	private String departmentName;
	@JsonProperty("workType")
	private String workType;
	@JsonProperty("workCategory")
	private String workCategory;
	@JsonProperty("workSubType")
	private String workSubType;
	@JsonProperty("projectPhase")
	private String projectPhase;
	@JsonProperty("deviationPercent")
	private String deviationPercent;
	@JsonProperty("startLocation")
	private String startLocation;
	@JsonProperty("endLocation")
	private String endLocation;
	@JsonProperty("financialYear")
	private String financialYear;
	@JsonProperty("budgetHead")
	private String budgetHead;

}
