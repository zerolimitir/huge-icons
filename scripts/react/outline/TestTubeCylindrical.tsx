import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTestTubeCylindrical = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M5.815 1.278c-.484.115-.717.726-.432 1.13.207.292.333.33 1.146.346l.709.014.012 7.906.013 7.906.088.384c.378 1.65 1.469 2.908 3.033 3.496.727.274 1.763.348 2.56.184 1.864-.384 3.27-1.78 3.705-3.68l.088-.384.013-7.91.012-7.91h.597c.762 0 .962-.041 1.161-.24.398-.398.21-1.097-.331-1.234-.21-.053-12.154-.06-12.374-.008M15.24 5v2.24H8.76V2.76h6.48V5m-.009 8.71-.011 4.95-.11.32c-.184.538-.4.878-.826 1.304-.427.428-.769.644-1.304.824-.296.101-.369.109-.98.109s-.684-.008-.98-.109c-.535-.18-.877-.396-1.304-.824-.426-.426-.642-.766-.826-1.304l-.11-.32-.011-4.95-.011-4.95h6.484l-.011 4.95'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTestTubeCylindrical);
export default ForwardRef;
