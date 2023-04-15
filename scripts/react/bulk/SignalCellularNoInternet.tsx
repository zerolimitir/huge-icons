import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSignalCellularNoInternet = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.7 11.316a.734.734 0 0 0-.398.413c-.053.128-.062.445-.061 2.28.001 1.986.006 2.142.075 2.291a.743.743 0 0 0 1.368 0c.069-.149.074-.304.074-2.3 0-1.996-.005-2.151-.074-2.3-.181-.392-.607-.558-.984-.384m0 7c-.372.171-.46.383-.46 1.101 0 .703.044.907.24 1.103.409.409 1.115.205 1.236-.358.024-.113.044-.453.043-.754-.001-.447-.014-.577-.075-.708-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignalCellularNoInternet);
export default ForwardRef;
