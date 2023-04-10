import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGold = (
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
            d='M12.75 1.75a.75.75 0 1 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1Zm-2.899 4a1.5 1.5 0 0 0-1.459 1.153l-.952 4A1.5 1.5 0 0 0 8.9 12.75H4.85a1.5 1.5 0 0 0-1.459 1.153l-.952 4A1.5 1.5 0 0 0 3.9 19.75h6.2a1.5 1.5 0 0 0 1.46-1.847l-.953-4a1.5 1.5 0 0 0-1.46-1.153h5.704a1.5 1.5 0 0 0-1.46 1.153l-.952 4a1.5 1.5 0 0 0 1.46 1.847H20.1a1.5 1.5 0 0 0 1.46-1.847l-.953-4a1.5 1.5 0 0 0-1.46-1.153H15.1a1.5 1.5 0 0 0 1.46-1.847l-.953-4a1.5 1.5 0 0 0-1.46-1.153H9.853Zm8.68-2.47-1 1a.75.75 0 0 1-1.061-1.06l1-1a.75.75 0 0 1 1.06 1.06Zm-12-1.06A.75.75 0 0 0 5.47 3.28l1 1a.75.75 0 0 0 1.06-1.06l-1-1Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGold);
export default ForwardRef;
