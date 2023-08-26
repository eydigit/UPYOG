package org.egov.repository.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.egov.web.models.ScheduleOfRateApplication;
import org.egov.web.models.WMSContractorApplication;
import org.egov.web.models.WMSPhysicalFinancialMilestoneApplication;
import org.egov.web.models.WMSWorkApplication;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Component;

@Component
public class WMSPhysicalFinancialMilestoneApplicationRowMapper implements ResultSetExtractor<List<WMSPhysicalFinancialMilestoneApplication>> {
    public List<WMSPhysicalFinancialMilestoneApplication> extractData(ResultSet rs) throws SQLException, DataAccessException {
        Map<Integer,WMSPhysicalFinancialMilestoneApplication> wmsPhysicalFinancialMilestoneApplicationMap = new LinkedHashMap<>();

        while (rs.next()){
            int milestoneId = rs.getInt("mMilestoneId");
            WMSPhysicalFinancialMilestoneApplication wmsPhysicalFinancialMilestoneApplication = wmsPhysicalFinancialMilestoneApplicationMap.get(milestoneId);

            if(wmsPhysicalFinancialMilestoneApplication == null) {

                Date lastModifiedTime = rs.getDate("actual_end_date");
                if (rs.wasNull()) {
                    lastModifiedTime = null;
                }
                wmsPhysicalFinancialMilestoneApplication = WMSPhysicalFinancialMilestoneApplication.builder()
                        .milestoneId(rs.getInt("mMilestoneId"))
                        .projectName(rs.getString("mProjectName"))
                        .workName(rs.getString("mWorkName"))
                        .milestoneName(rs.getString("mMilestoneName"))
                        .srNo(rs.getInt("mSrNo"))
                        .activityDescription(rs.getString("mActivityDescription"))
                        .percentageWeightage(rs.getString("mPercentageWeightage"))
                        .plannedStartDate(rs.getString("mPlannedStartDate"))
                        .plannedEndDate(rs.getString("mPlannedEndDate"))
                        .totalWeightage(rs.getInt("mTotalWeightage"))
                        .milestoneDescription(rs.getString("mMilestoneDescription"))
                        .actualStartDate(rs.getString("mActualStartDate"))
                        .actualEndDate(rs.getString("mActualEndDate"))
                        .progressUpdateDate(rs.getString("mProgressUpdateDate"))
                        .completedPercentage(rs.getString("mCompletedPercentage"))
                        .build();
            }
            //addChildrenToProperty(rs, sorApplication);
            wmsPhysicalFinancialMilestoneApplicationMap.put(milestoneId, wmsPhysicalFinancialMilestoneApplication);
        }
        return new ArrayList<>(wmsPhysicalFinancialMilestoneApplicationMap.values());
    }

}
