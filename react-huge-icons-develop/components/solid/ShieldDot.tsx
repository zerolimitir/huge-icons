import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgShieldDot = (
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
            d='m5.332 4.71 5.039-2.346a3.864 3.864 0 0 1 3.275 0l5.019 2.337a4.046 4.046 0 0 1 2.328 3.9c-.395 6.44-2.152 9.353-6.903 12.731a3.575 3.575 0 0 1-4.162 0C5.19 17.971 3.368 15.1 3.006 8.577A4.037 4.037 0 0 1 5.332 4.71ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShieldDot);
export default ForwardRef;
