import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgProjectorLight = (
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
            d='M12.75 3a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0V3ZM12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-.75-4a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM12 8.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM6.5 11H5a2 2 0 0 0-2 2v4a2 2 0 0 0 1.25 1.855V21a.75.75 0 0 0 1.5 0v-2h12.5v2a.75.75 0 0 0 1.5 0v-2.145A2 2 0 0 0 21 17v-4a2 2 0 0 0-2-2h-1.5a5.5 5.5 0 1 1-11 0Zm13.03-5.47-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 1 1 1.06 1.06Zm-14-1.06a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06l-1.5-1.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgProjectorLight);
export default ForwardRef;
