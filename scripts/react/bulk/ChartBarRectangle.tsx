import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChartBarRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M7.438 7.075a1.984 1.984 0 0 0-.872.542 1.955 1.955 0 0 0-.502.86C6.007 8.669 6 9.077 6 12s.007 3.331.064 3.523c.104.347.249.597.503.861a1.967 1.967 0 0 0 2.866 0c.254-.264.399-.514.503-.861.057-.192.064-.6.064-3.523s-.007-3.331-.064-3.523a2.075 2.075 0 0 0-1.413-1.413 2.275 2.275 0 0 0-1.085.011m8 4a1.984 1.984 0 0 0-.872.542 1.955 1.955 0 0 0-.502.86c-.094.319-.095 2.724 0 3.046.103.352.288.657.552.91A1.91 1.91 0 0 0 16 17c.895 0 1.678-.597 1.936-1.477.095-.322.094-2.727 0-3.046a2.075 2.075 0 0 0-1.413-1.413 2.275 2.275 0 0 0-1.085.011'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartBarRectangle);
export default ForwardRef;
