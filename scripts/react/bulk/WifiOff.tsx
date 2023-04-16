import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWifiOff = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2.807 2.288c-.376.083-.605.483-.518.902.038.179.106.256 1.139 1.295l1.1 1.106-.314.21c-.778.523-1.699 1.294-1.815 1.521a.828.828 0 0 0-.009.675.715.715 0 0 0 .604.395c.286.02.407-.035.766-.35.43-.377.874-.716 1.375-1.052l.476-.319 1.274 1.274c.701.701 1.275 1.285 1.275 1.298 0 .012-.157.109-.35.214-.928.506-2.092 1.427-2.234 1.767-.153.366.039.838.397.973.18.069.511.052.647-.032a5.26 5.26 0 0 0 .44-.359c.581-.518 1.467-1.094 2.043-1.327l.224-.091 1.417 1.416c.779.778 1.416 1.429 1.416 1.446 0 .016-.052.03-.116.03-.175 0-.724.111-1.009.205a4.992 4.992 0 0 0-1.789 1.057c-.435.403-.574.693-.487 1.015a.773.773 0 0 0 .723.563c.238 0 .35-.062.677-.374.476-.455.867-.692 1.442-.872.258-.081.381-.094.899-.094s.641.013.899.094c.615.193.471.064 3.961 3.545 2.647 2.641 3.289 3.262 3.415 3.301.624.198 1.184-.431.908-1.02-.052-.112-2.824-2.907-9.189-9.266C4.672 3.618 3.36 2.324 3.24 2.301l-.2-.039a.841.841 0 0 0-.233.026m9.306 15.773c-.37.118-.673.541-.673.939 0 .401.297.813.679.94A.998.998 0 0 0 13.44 19c0-.679-.667-1.151-1.327-.939'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWifiOff);
export default ForwardRef;