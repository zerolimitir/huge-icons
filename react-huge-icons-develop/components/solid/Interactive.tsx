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
            fillRule='evenodd'
            d='M2.75 12a9.25 9.25 0 0 1 18.5-.078.75.75 0 1 0 1.5-.013C22.7 6.014 17.907 1.25 12 1.25 6.063 1.25 1.25 6.063 1.25 12c0 5.907 4.764 10.7 10.66 10.75a.75.75 0 1 0 .012-1.5A9.25 9.25 0 0 1 2.75 12ZM12 7.75a4.25 4.25 0 0 0-1.59 8.193.75.75 0 1 1-.563 1.39A5.752 5.752 0 0 1 12 6.25a5.752 5.752 0 0 1 5.333 3.597.75.75 0 1 1-1.39.562A4.252 4.252 0 0 0 12 7.75Zm2.67 13.511-2.613-7.837a1.08 1.08 0 0 1 1.367-1.367l7.837 2.613c.985.328.985 1.721 0 2.05l-2.894.964a1.08 1.08 0 0 0-.683.683l-.965 2.894c-.328.985-1.72.985-2.05 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInteractive);
export default ForwardRef;
