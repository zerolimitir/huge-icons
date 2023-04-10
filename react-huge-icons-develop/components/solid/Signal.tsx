import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSignal = (
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
            d='M20.677 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75Zm-4 3a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75ZM13.427 10a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0V10Zm-4.75 2.25a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 .75-.75Zm-6.086-.658 1.337 1.671V20a.75.75 0 0 0 1.5 0v-6.737l1.336-1.671c1.4-1.75.154-4.342-2.086-4.342-2.241 0-3.487 2.592-2.087 4.342Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignal);
export default ForwardRef;
