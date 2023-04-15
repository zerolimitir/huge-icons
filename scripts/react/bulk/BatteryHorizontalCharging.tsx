import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBatteryHorizontalCharging = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M12.195 8.145a488.36 488.36 0 0 0-3.965 3.856c-.183.184-.23.257-.23.358 0 .339.146.401.939.401.804 0 .981.068.981.375 0 .055-.207.631-.461 1.281-.499 1.281-.504 1.305-.292 1.484.18.151.424.139.622-.03.14-.12 3.461-3.349 3.981-3.871.183-.184.23-.257.23-.358 0-.341-.144-.401-.96-.401-.496 0-.671-.014-.761-.06-.134-.07-.199-.172-.199-.315 0-.055.207-.631.461-1.281.328-.841.454-1.21.437-1.279-.041-.164-.196-.275-.411-.295-.183-.018-.209-.009-.372.135m9.612 1.144c-.249.053-.465.281-.523.549-.06.283-.06 4.041 0 4.324.163.758 1.269.758 1.432 0 .058-.271.059-4.069.001-4.321-.097-.421-.47-.647-.91-.552'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBatteryHorizontalCharging);
export default ForwardRef;
