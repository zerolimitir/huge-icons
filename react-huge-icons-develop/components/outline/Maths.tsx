import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMaths = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            d='M2 6.25a.75.75 0 0 0 0 1.5v-1.5Zm20 1.5a.75.75 0 0 0 0-1.5v1.5ZM7.624 13.584a.75.75 0 1 0-1.248.832l1.248-.832ZM9 17l-.624.416a.75.75 0 0 0 1.295-.08L9 17Zm3-6v-.75a.75.75 0 0 0-.67.415L12 11Zm5 .75a.75.75 0 0 0 0-1.5v1.5Zm-.53 5.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-1.94-4.06a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-1.06 3a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm4.06-1.94a.75.75 0 1 0-1.06-1.06l1.06 1.06ZM6 2.75h12v-1.5H6v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Zm-4 6.5h20v-1.5H2v1.5Zm4.376 6.666 2 3 1.248-.832-2-3-1.248.832Zm3.295 2.92 3-6-1.342-.671-3 6 1.342.67ZM12 11.75h5v-1.5h-5v1.5Zm5.53 4.72-3-3-1.06 1.06 3 3 1.06-1.06Zm-3 1.06 3-3-1.06-1.06-3 3 1.06 1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMaths);
export default ForwardRef;
