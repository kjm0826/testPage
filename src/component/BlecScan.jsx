import * as React from 'react';
import ScanProcSpec from './ScanProcSpec';
import InOutProc from './InOutProc';
import JisaProc from './JisaProc';
import SillingProc from './SillingProc';

export default function BlecScan() {
    return (
        <>
            {/* 입출고 구분처리  */}
            <InOutProc />

            <p></p>

            {/* 지사택 처리  */}
            <JisaProc />

            <p></p>

            {/* 보관택 처리  */}
            <SillingProc />

            <p></p>

            {/* 입출고 처리내역 조회  */}
            <ScanProcSpec />
        </>
      );
}