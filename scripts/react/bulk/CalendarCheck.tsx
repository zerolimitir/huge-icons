import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCalendarCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.556 3.521a4.034 4.034 0 0 0-3.497 3.314C3.019 7.064 3 7.46 3 8.085V9h18v-.915c0-.994-.043-1.368-.218-1.88-.375-1.1-1.306-2.058-2.376-2.446-.751-.271-.316-.253-6.226-.262-2.948-.004-5.479.006-5.624.024m8.138 8.796c-.133.061-.473.425-1.676 1.799-1.388 1.586-1.518 1.724-1.634 1.724-.103 0-.284-.127-1.005-.708-.936-.755-1.149-.893-1.376-.891a.893.893 0 0 0-.551.244.895.895 0 0 0-.212.525c0 .309.122.444 1.16 1.278.539.433 1.065.835 1.169.892a1.75 1.75 0 0 0 1.045.18c.413-.064.723-.228 1.034-.548.549-.565 2.964-3.359 3.035-3.512.18-.384-.003-.827-.412-.998a.672.672 0 0 0-.577.015'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCalendarCheck);
export default ForwardRef;
