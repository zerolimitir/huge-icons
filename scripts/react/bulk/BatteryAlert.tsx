import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBatteryAlert = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.807 1.287a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.283.06 4.041.06 4.324 0 .758-.163.758-1.269 0-1.432-.259-.055-4.104-.053-4.355.003M11.7 8.316a.734.734 0 0 0-.398.413c-.053.128-.062.445-.061 2.28.001 1.986.006 2.142.075 2.291a.743.743 0 0 0 1.368 0c.069-.149.074-.304.074-2.3 0-1.996-.005-2.151-.074-2.3-.181-.392-.607-.558-.984-.384m0 7c-.384.177-.46.374-.459 1.193.001.684.04.852.244 1.039a.746.746 0 0 0 1.199-.248c.062-.134.074-.262.074-.8s-.012-.666-.074-.8c-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBatteryAlert);
export default ForwardRef;
