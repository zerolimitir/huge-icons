import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMailFast = (
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
            fillRule='evenodd'
            d='M6 3h12a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-7.5a1 1 0 0 1-1-1v-3.5a4 4 0 0 0-4-4H3a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4Zm.416 4.376a.75.75 0 0 0-.832 1.248l3.781 2.52a4.75 4.75 0 0 0 5.27 0l3.781-2.52a.75.75 0 1 0-.832-1.248l-3.781 2.52a3.25 3.25 0 0 1-3.606 0l-3.781-2.52ZM1.25 15a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75ZM2 17.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5H2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMailFast);
export default ForwardRef;
