import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBasketBall = (
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
            d='M5.384 4.502a9.959 9.959 0 0 1 5.866-2.474v9.222H7.805a12.566 12.566 0 0 0-2.421-6.748Zm.919 6.748A11.072 11.072 0 0 0 4.32 5.594a9.955 9.955 0 0 0-2.293 5.656h4.275Zm-4.275 1.5h4.275a11.072 11.072 0 0 1-1.982 5.657 9.955 9.955 0 0 1-2.293-5.657Zm5.777 0h3.445v9.222a9.958 9.958 0 0 1-5.866-2.474 12.566 12.566 0 0 0 2.421-6.748Zm4.945 0v9.222a9.958 9.958 0 0 0 5.867-2.474 12.566 12.566 0 0 1-2.422-6.748H12.75Zm4.948 0a11.073 11.073 0 0 0 1.98 5.657 9.955 9.955 0 0 0 2.294-5.657h-4.274Zm4.274-1.5h-4.274a11.072 11.072 0 0 1 1.98-5.656 9.955 9.955 0 0 1 2.294 5.656Zm-5.777 0H12.75V2.028a9.959 9.959 0 0 1 5.867 2.474 12.567 12.567 0 0 0-2.422 6.748Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBasketBall);
export default ForwardRef;
