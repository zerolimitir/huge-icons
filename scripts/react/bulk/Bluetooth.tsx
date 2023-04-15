import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBluetooth = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.811 3.278c-.396.097-.638.519-.531.926.042.16.379.509 3.792 3.925 2.328 2.331 3.731 3.763 3.707 3.785-.022.02-1.231.83-2.688 1.801-2.93 1.951-2.811 1.854-2.811 2.288 0 .27.125.493.351.625.146.086.209.099.42.085l.249-.017 2.47-1.648 2.47-1.648.001 2.73c0 1.501.017 2.842.037 2.98a1.74 1.74 0 0 0 2.254 1.41c.326-.101.428-.177 2.028-1.513l1.3-1.085 1.36 1.358c.916.914 1.409 1.377 1.509 1.419a.735.735 0 0 0 1.031-.679.847.847 0 0 0-.077-.332C20.603 19.535 4.485 3.401 4.34 3.329a.984.984 0 0 0-.529-.051m11.958 13.607c-.28.265-2.654 2.203-2.719 2.22a.257.257 0 0 1-.19-.042l-.1-.065V13.82l1.519 1.519c.836.835 1.506 1.531 1.49 1.546'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBluetooth);
export default ForwardRef;
