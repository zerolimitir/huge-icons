import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLocationLine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.336 1.283c-.895.065-2.056.372-2.903.768-2.542 1.188-4.248 3.427-4.616 6.057-.094.672-.06 1.7.076 2.332.663 3.068 3.252 6.807 5.907 8.53.646.419 1.269.672 1.858.754.985.138 2.243-.368 3.562-1.432 2.392-1.93 4.396-5.021 4.903-7.563.172-.86.147-2.044-.064-3.029A8.128 8.128 0 0 0 17.2 3.075c-1.271-1.02-2.956-1.674-4.622-1.794-.609-.044-.598-.044-1.242.002m1.963 1.596c2.317.459 4.231 2.071 5.033 4.241.386 1.044.504 2.332.309 3.36-.488 2.566-3.209 6.228-5.506 7.409-.683.352-1.133.426-1.618.267-2.246-.738-5.443-4.86-6.121-7.896-.296-1.321-.083-2.777.586-4.005.937-1.723 2.725-2.999 4.72-3.371.625-.117.643-.118 1.438-.104.536.009.832.035 1.159.099m-1.744 2.4a4.153 4.153 0 0 0-1.713.651c-.307.207-.847.791-1.057 1.142a4.05 4.05 0 0 0-.512 1.52 3.811 3.811 0 0 0 .512 2.337c.262.442.844 1.024 1.286 1.286a3.749 3.749 0 0 0 3.138.33c.569-.195.978-.454 1.43-.906.452-.452.711-.861.906-1.43a3.684 3.684 0 0 0-.865-3.81c-.382-.389-.559-.519-1.034-.758-.587-.297-1.436-.443-2.091-.362m1.21 1.613c.649.246 1.087.682 1.344 1.337.095.242.107.324.107.771s-.012.529-.107.771c-.357.909-1.161 1.469-2.109 1.469s-1.752-.56-2.109-1.469c-.095-.242-.107-.324-.107-.771 0-.444.012-.53.104-.765.298-.756.891-1.272 1.652-1.437.301-.065.933-.016 1.225.094M5.811 21.279a.76.76 0 0 0-.551.606c-.063.335.19.739.521.83.225.063 12.213.063 12.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-6.143-.006c-3.379-.004-6.201.008-6.272.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLocationLine);
export default ForwardRef;