import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHeadphonesMicrophone = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.66 9.265c-1.08.109-2.135.722-2.731 1.586a3.332 3.332 0 0 0-.502 1.014c-.171.541-.197.898-.176 2.349.017 1.169.029 1.364.102 1.646.372 1.444 1.431 2.479 2.867 2.803.457.103 1.169.095 1.64-.019a4.52 4.52 0 0 0 1.421-.675c.655-.497 1.153-1.266 1.368-2.114.086-.337.091-.43.091-1.855s-.005-1.518-.091-1.855c-.421-1.657-1.79-2.792-3.469-2.878a4.733 4.733 0 0 0-.52-.002m12 0c-1.639.165-2.945 1.325-3.325 2.955-.066.282-.075.495-.075 1.78 0 1.284.009 1.499.075 1.78.414 1.778 1.89 2.96 3.685 2.953a3.69 3.69 0 0 0 2.668-1.124 3.702 3.702 0 0 0 1.029-2.104c.056-.403.056-2.607 0-3.01a3.741 3.741 0 0 0-3.537-3.228 4.733 4.733 0 0 0-.52-.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHeadphonesMicrophone);
export default ForwardRef;
