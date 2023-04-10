import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgEyeLightDouble = (
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
            d='M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm7.102 8.836C17.45 8.676 14.883 7 12 7s-5.45 1.675-7.102 3.086a2.487 2.487 0 0 0 0 3.828C6.55 15.324 9.117 17 12 17s5.45-1.675 7.102-3.086a2.487 2.487 0 0 0 0-3.828ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.75 6a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2ZM2.47 4.47a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06Zm19.06 0a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0Zm-18 15.06a.75.75 0 0 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 1.06l-1.5 1.5Zm18-1.06a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 1 1 1.06-1.06l1.5 1.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEyeLightDouble);
export default ForwardRef;
