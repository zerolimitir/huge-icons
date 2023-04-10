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
            d='M22 12a9.966 9.966 0 0 1-2.778 6.917A9.971 9.971 0 0 1 12 22a9.971 9.971 0 0 1-7.222-3.083A9.966 9.966 0 0 1 2 12a9.966 9.966 0 0 1 2.778-6.917A9.971 9.971 0 0 1 12 2a9.971 9.971 0 0 1 7.222 3.083A9.966 9.966 0 0 1 22 12Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M12.75 11.25h3.445a12.565 12.565 0 0 1 2.422-6.748 10.044 10.044 0 0 1 1.062 1.092 11.072 11.072 0 0 0-1.981 5.656h4.274a10.119 10.119 0 0 1 0 1.5h-4.274a11.073 11.073 0 0 0 1.98 5.657 10.034 10.034 0 0 1-1.061 1.091 12.565 12.565 0 0 1-2.422-6.748H12.75v9.222a10.119 10.119 0 0 1-1.5 0V12.75H7.805a12.566 12.566 0 0 1-2.422 6.748 10.06 10.06 0 0 1-1.062-1.091 11.072 11.072 0 0 0 1.982-5.657H2.027a10.14 10.14 0 0 1 0-1.5h4.275A11.072 11.072 0 0 0 4.32 5.594a10.057 10.057 0 0 1 1.062-1.092 12.566 12.566 0 0 1 2.422 6.748h3.445V2.028a10.14 10.14 0 0 1 1.5 0v9.222Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBasketBall);
export default ForwardRef;
