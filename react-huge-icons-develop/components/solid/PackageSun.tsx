import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPackageSun = (
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
            d='M12.75 2a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0V2ZM5.166 5.166a.75.75 0 0 1-1.06 0l-.708-.707A.75.75 0 1 1 4.46 3.4l.707.707a.75.75 0 0 1 0 1.06Zm15.435-.707a.75.75 0 1 0-1.06-1.06l-.707.707a.75.75 0 1 0 1.06 1.06l.707-.707ZM18 16V9.75H6V16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2Zm-.586-7.92c.054.055.104.111.151.17H6.435a2.4 2.4 0 0 1 .15-.17l1.496-1.494A2 2 0 0 1 9.495 6h5.01a2 2 0 0 1 1.414.586l1.495 1.495ZM10.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM12 20.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm-6.834-1.416a.75.75 0 0 1 0 1.06l-.707.707a.75.75 0 0 1-1.06-1.06l.707-.707a.75.75 0 0 1 1.06 0ZM22 12.75a.75.75 0 0 0 0-1.5h-1a.75.75 0 0 0 0 1.5h1ZM3.75 12a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75Zm15.79 8.601a.75.75 0 0 0 1.061-1.06l-.707-.707a.75.75 0 0 0-1.06 1.06l.707.707Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackageSun);
export default ForwardRef;
