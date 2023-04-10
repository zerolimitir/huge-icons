import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLoadingDashed = (
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
            d='M12.75 2.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5Zm0 16.25a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 1.5 0V19Zm6.321-14.071a.75.75 0 0 1 0 1.06l-1.768 1.768a.75.75 0 1 1-1.06-1.06l1.767-1.768a.75.75 0 0 1 1.061 0ZM7.581 17.48a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.592-1.59ZM22 12a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h2.5A.75.75 0 0 1 22 12Zm-17 .75a.75.75 0 0 0 0-1.5H2.75a.75.75 0 0 0 0 1.5H5Zm14.071 6.321a.75.75 0 0 1-1.06 0l-1.768-1.768a.75.75 0 1 1 1.06-1.06l1.768 1.767a.75.75 0 0 1 0 1.061ZM6.52 7.581A.75.75 0 1 0 7.58 6.52L5.99 4.929a.75.75 0 0 0-1.061 1.06l1.59 1.592Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLoadingDashed);
export default ForwardRef;
