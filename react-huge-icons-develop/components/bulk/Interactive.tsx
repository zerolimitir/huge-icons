import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgInteractive = (
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
            d='m14.67 21.262-2.613-7.838a1.08 1.08 0 0 1 1.367-1.367l7.838 2.613c.984.328.984 1.721 0 2.05l-2.895.964a1.08 1.08 0 0 0-.683.683l-.965 2.895c-.328.984-1.72.984-2.05 0Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 7.75a4.25 4.25 0 0 0-1.59 8.193.75.75 0 1 1-.563 1.39A5.752 5.752 0 0 1 12 6.25a5.752 5.752 0 0 1 5.333 3.597.75.75 0 1 1-1.39.562A4.252 4.252 0 0 0 12 7.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 2.75a9.25 9.25 0 0 0-.078 18.5.75.75 0 1 1-.013 1.5C6.014 22.7 1.25 17.907 1.25 12 1.25 6.063 6.063 1.25 12 1.25c5.907 0 10.7 4.764 10.75 10.66a.75.75 0 1 1-1.5.012A9.25 9.25 0 0 0 12 2.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInteractive);
export default ForwardRef;
