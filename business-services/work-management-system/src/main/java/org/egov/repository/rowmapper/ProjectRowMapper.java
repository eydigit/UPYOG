package org.egov.repository.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Component;
import org.egov.web.models.Project;
import org.egov.web.models.Scheme;

@Component
public class ProjectRowMapper implements ResultSetExtractor<List<Project>> {
    public List<Project> extractData(ResultSet rs) throws SQLException, DataAccessException {
        Map<Long,Project> projectApplicationMap = new LinkedHashMap<>();

        while (rs.next()){
            long projectId = rs.getLong("sProjectId");
            Project projectApplication = projectApplicationMap.get(projectId);

            if(projectApplication == null) {

                Date lastModifiedTime = rs.getDate("sProjectStartDate");
                if (rs.wasNull()) {
                    lastModifiedTime = null;
                }
                projectApplication = Project.builder()
                        .projectId((long) rs.getLong("sProjectId"))
                        .projectNumber(rs.getString("sProjectNumber"))
                        .sourceOfFund(rs.getString("sSchemeSourceOfFund"))
                        .schemeNo(rs.getLong("sSchemeNo"))
                        .department(rs.getString("sDepartment"))
                        .projectNameEn(rs.getString("sProjectNameEn"))
                        .projectNameReg(rs.getString("sProjectNameReg"))
                        .projectDescription(rs.getString("sProjectDescription"))
                        .projectTimeline(rs.getString("sProjectTimeline"))
                        .projectStartDate(rs.getString("sProjectStartDate"))
                        .projectEndDate(rs.getString("sProjectEndDate"))
                        .schemeName(rs.getString("sSchemeName"))
                        .approvalNumber(rs.getString("sApprovalNumber"))
                        .approvalDate(rs.getString("sApprovalDate"))
                        .status(rs.getString("sStatus"))
                        .build();
            }
            
            projectApplicationMap.put(projectId, projectApplication);
        }
        return new ArrayList<>(projectApplicationMap.values());
    }

}
