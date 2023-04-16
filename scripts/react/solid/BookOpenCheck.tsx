import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBookOpenCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.364 3.063c-.649.175-1.171.748-1.319 1.449-.032.151-.045 1.891-.044 6.06 0 6.422-.012 6.091.243 6.596.146.29.493.67.776.852.323.207.638.3 1.36.403 1.746.25 3.01.551 4.3 1.025.782.288 1.85.815 2.45 1.209l.11.072V5.364l-.33-.204c-1.639-1.011-3.802-1.714-6.4-2.077-.684-.096-.851-.099-1.146-.02m15.98.039c-2.565.382-4.648 1.065-6.229 2.043l-.355.22v15.364l.09-.059a14.252 14.252 0 0 1 1.915-1.007l.265-.111-.02-.348c-.045-.776.137-1.629.509-2.389.517-1.057 1.295-1.822 2.384-2.342 1.225-.585 2.681-.619 4.027-.092.066.026.07-.22.07-4.828 0-5.265.009-5.043-.215-5.534-.119-.26-.486-.654-.735-.79a1.982 1.982 0 0 0-.868-.226c-.111.002-.488.046-.838.099M5.603 7.601a19.53 19.53 0 0 1 2.892.721c.845.279 1.032.378 1.152.61a.738.738 0 0 1-.376 1.046c-.223.093-.34.078-.886-.115A19.61 19.61 0 0 0 5.34 9.08c-.623-.109-.702-.136-.848-.291-.177-.186-.223-.298-.223-.534a.72.72 0 0 1 .714-.735c.09 0 .369.037.62.081m.079 4.015c.609.109 1.44.292 1.595.35.263.099.454.392.454.694a.69.69 0 0 1-.237.547c-.235.222-.421.239-1.047.095a30.58 30.58 0 0 0-1.083-.219c-.75-.138-.902-.21-1.039-.493-.243-.501.093-1.064.637-1.068.1-.001.424.041.72.094m16.016 4.699c-.128.059-.363.317-1.154 1.269a44.595 44.595 0 0 1-1.073 1.266.295.295 0 0 1-.164.07c-.046 0-.301-.143-.565-.317-.267-.176-.546-.329-.626-.344-.422-.076-.872.301-.875.732a.91.91 0 0 0 .191.503c.137.153 1.035.725 1.288.819.316.119.751.132 1.085.034.466-.137.629-.291 1.79-1.685.676-.812 1.094-1.348 1.125-1.442.203-.615-.429-1.174-1.022-.905'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookOpenCheck);
export default ForwardRef;