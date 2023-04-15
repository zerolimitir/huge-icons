import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.58 7.095A.976.976 0 0 0 5.002 8c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m5.858 2.98a1.984 1.984 0 0 0-.872.542c-.78.813-.759 2.04.05 2.816.814.781 2.04.76 2.817-.049A1.91 1.91 0 0 0 14 12c0-.895-.597-1.678-1.477-1.936a2.275 2.275 0 0 0-1.085.011m10.256 5.241c-.132.061-.485.44-1.676 1.8-1.384 1.582-1.519 1.724-1.633 1.724-.102 0-.29-.133-1.025-.724-.936-.752-1.125-.874-1.362-.875-.208-.001-.478.152-.617.351a.761.761 0 0 0-.039.768c.117.203 1.921 1.646 2.284 1.826.523.26 1.194.221 1.694-.098.227-.144.76-.727 2.403-2.628.972-1.124.949-1.094.992-1.296a.743.743 0 0 0-.137-.628c-.187-.248-.602-.351-.884-.22'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyCheck);
export default ForwardRef;
