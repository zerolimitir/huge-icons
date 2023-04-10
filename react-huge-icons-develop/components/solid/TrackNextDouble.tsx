import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTrackNextDouble = (
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
            d='m14.008 17.245 6.03-3.518c.075-.043.146-.09.212-.14V16.5a.75.75 0 0 0 1.5 0v-9a.75.75 0 0 0-1.5 0v2.914a2.075 2.075 0 0 0-.212-.142l-6.03-3.518C12.674 5.977 11 6.938 11 8.482v1.185L6.008 6.754C4.674 5.977 3 6.938 3 8.482v7.036c0 1.543 1.674 2.505 3.008 1.727L11 14.333v1.185c0 1.543 1.674 2.505 3.008 1.727Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrackNextDouble);
export default ForwardRef;
