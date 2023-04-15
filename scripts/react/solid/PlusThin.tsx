import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPlusThin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.811 5.278a.883.883 0 0 0-.481.374c-.064.118-.071.347-.081 2.857l-.011 2.728-2.732.012-2.732.011-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.109.031.999.045 2.809.045h2.65v2.65c0 1.81.014 2.7.045 2.809.059.213.293.441.513.5.4.108.812-.12.92-.51.027-.096.042-1.1.042-2.799v-2.65h2.65c1.81 0 2.7-.014 2.809-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-2.732-.011-2.732-.012-.011-2.728c-.011-2.668-.013-2.732-.093-2.868a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPlusThin);
export default ForwardRef;
