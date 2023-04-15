import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBatteryHorizontalFull = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.694 9.317c-.133.061-.473.425-1.676 1.799-1.388 1.586-1.518 1.724-1.634 1.724-.103 0-.284-.127-1.005-.708-.936-.755-1.149-.893-1.376-.891a.893.893 0 0 0-.551.244.895.895 0 0 0-.212.525c0 .309.122.444 1.16 1.278.539.433 1.065.835 1.169.892a1.75 1.75 0 0 0 1.045.18c.413-.064.723-.228 1.034-.548.549-.565 2.964-3.359 3.035-3.512.18-.384-.003-.827-.412-.998a.672.672 0 0 0-.577.015m8.113-.028c-.249.053-.465.281-.523.549-.06.283-.06 4.041 0 4.324.163.758 1.269.758 1.432 0 .058-.271.059-4.069.001-4.321-.097-.421-.47-.647-.91-.552'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBatteryHorizontalFull);
export default ForwardRef;
