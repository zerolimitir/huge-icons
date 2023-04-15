import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBatteryChargingFull = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.807 1.287a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.283.06 4.041.06 4.324 0 .758-.163.758-1.269 0-1.432-.259-.055-4.104-.053-4.355.003m4.887 9.03c-.133.061-.473.425-1.676 1.799-1.388 1.586-1.518 1.724-1.634 1.724-.103 0-.284-.127-1.005-.708-.936-.755-1.149-.893-1.376-.891a.893.893 0 0 0-.551.244.895.895 0 0 0-.212.525c0 .309.122.444 1.16 1.278.539.433 1.065.835 1.169.892a1.75 1.75 0 0 0 1.045.18c.413-.064.723-.228 1.034-.548.549-.565 2.964-3.359 3.035-3.512.18-.384-.003-.827-.412-.998a.672.672 0 0 0-.577.015'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBatteryChargingFull);
export default ForwardRef;
