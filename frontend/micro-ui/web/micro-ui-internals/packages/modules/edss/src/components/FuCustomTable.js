import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Table } from "@egovernments/digit-ui-react-components";
import { useTranslation } from "react-i18next";
import { Row, Col} from "reactstrap";

const FuCustomTable = () => {
 
  const { t } = useTranslation();
  const tableData = React.useMemo(
    () => [
      { ddrName: 'DDR A', total: 100, open: 40 , closed : 60, wsla : 40, osla : 20},
      { ddrName: 'DDR B', total: 200, open: 90 , closed : 110, wsla : 90, osla : 20},
      { ddrName: 'DDR C', total: 150, open: 60 , closed : 90, wsla : 70, osla : 20},
      { ddrName: 'DDR D', total: 100, open: 40 , closed : 60, wsla : 50, osla : 10},
      { ddrName: 'DDR E', total: 50, open: 10 , closed : 40, wsla : 35, osla : 5}
    ],
    []
  );
  const tableColumns = React.useMemo(
    () => [
      { Header: 'District Name', accessor: 'ddrName' },
      { Header: 'Total Complaints', accessor: 'total' },
      { Header: 'Open Complaints', accessor: 'open' },
      { Header: 'Closed Complaints', accessor: 'closed' },
      { Header: 'Within SLA', accessor: 'wsla' },
      { Header: 'Outside SLA', accessor: 'osla' },
    ],
    []
  );

  return (
    <div style={{ width: "100%" }}>
      <br />
      <Row>
        <Col lg="12" xl="12">  <h3>
           &nbsp; Grievance Details Based On Location
          </h3></Col>
      </Row>
        <Table
          className="customTable "
          t={t}
          customTableWrapperClassName={"dss-table-wrapper"}
          disableSort={false}
          autoSort={false}
          manualPagination={false}
          globalSearch={''}
          initSortId="S N "
          onSearch={''}
          data={tableData}
          totalRecords={tableData?.length}
          columns={tableColumns}
          showAutoSerialNo={"SL No."}
          styles={{ overflow: "hidden" }}
          getCellProps={(cellInfo) => {
            return {
              style: {},
            };
          }}
        />
    </div>
  );
};


export default FuCustomTable;