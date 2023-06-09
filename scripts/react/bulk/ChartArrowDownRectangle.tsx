import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChartArrowDownRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.7 8.296c-.397.175-.56.619-.377 1.024.045.099.634 1.195 1.309 2.435 1.353 2.488 1.401 2.558 1.899 2.804.385.189.717.234 1.116.152.388-.081.689-.25.942-.531.1-.11.627-.938 1.173-1.84 1.03-1.704 1.092-1.785 1.27-1.675.057.036 2.368 3.507 2.368 3.558 0 .009-.24.017-.534.017-.481 0-.551.009-.71.093a.755.755 0 0 0 0 1.334c.173.091.201.093 1.302.093 1.479 0 1.68-.05 2.164-.536.215-.215.295-.347.673-1.104.237-.473.44-.926.452-1.008a.679.679 0 0 0-.179-.601c-.173-.19-.341-.271-.568-.271-.381 0-.57.181-.926.892-.209.416-.251.478-.289.417-.025-.04-.603-.921-1.285-1.959-1.098-1.67-1.267-1.909-1.478-2.079-.358-.287-.594-.366-1.104-.369-.408-.002-.432.003-.72.145-.493.244-.596.377-1.69 2.187-.542.898-1.02 1.662-1.06 1.699-.095.086-.179.085-.28-.003-.044-.038-.626-1.078-1.294-2.31-.667-1.232-1.267-2.301-1.333-2.376a.847.847 0 0 0-.249-.19.878.878 0 0 0-.592.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartArrowDownRectangle);
export default ForwardRef;
