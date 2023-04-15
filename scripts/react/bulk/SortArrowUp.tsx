import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSortArrowUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M5.696 5.282a4.328 4.328 0 0 0-.42.078c-.3.078-.806.346-1.032.546-.287.253-1.824 1.98-1.909 2.144-.083.161-.086.495-.005.651.126.241.416.42.679.418.292-.002.427-.114 1.259-1.044.44-.492.839-.929.886-.971l.086-.076v5.464c0 3.839.013 5.525.044 5.67.163.758 1.269.758 1.432 0 .031-.145.044-1.831.044-5.67V7.028l.086.076c.047.042.446.479.886.971.832.93.967 1.042 1.259 1.044a.81.81 0 0 0 .678-.418c.085-.162.082-.49-.004-.655-.09-.169-1.589-1.852-1.895-2.126-.516-.462-1.378-.727-2.074-.638'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSortArrowUp);
export default ForwardRef;
