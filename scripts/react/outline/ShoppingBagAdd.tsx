import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgShoppingBagAdd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.864 2.284c-1.574.166-3.001 1.158-3.72 2.588-.319.633-.332.699-1.269 6.289-.827 4.943-.887 5.334-.89 5.819-.003.587.052.959.221 1.476a4.469 4.469 0 0 0 1.082 1.807 4.733 4.733 0 0 0 2.452 1.39c.347.079.489.083 3.829.097 2.515.01 3.515.001 3.638-.032a.802.802 0 0 0 .512-.514c.089-.331-.03-.638-.324-.832l-.169-.112-3.563-.02-3.563-.02-.38-.132c-.548-.191-.882-.402-1.304-.826-.316-.316-.392-.422-.57-.784-.259-.526-.327-.786-.352-1.338-.02-.43-.002-.554.842-5.6.474-2.838.889-5.263.922-5.389.291-1.106 1.177-1.981 2.322-2.294.268-.074.464-.077 4.42-.077s4.152.003 4.42.077c1.142.312 2.034 1.192 2.32 2.288.032.122.311 1.738.621 3.589s.583 3.434.608 3.517c.056.189.292.408.512.474.433.13.927-.242.925-.696 0-.093-.263-1.737-.582-3.653-.427-2.552-.614-3.58-.701-3.846a4.652 4.652 0 0 0-1.493-2.189c-.779-.624-1.59-.961-2.555-1.06-.484-.049-7.738-.047-8.211.003m.947 2.994a.883.883 0 0 0-.481.374c-.056.104-.072.255-.083.801-.017.814.034 1.242.21 1.757.192.567.452.977.904 1.429.452.452.861.711 1.43.906.8.273 1.618.273 2.418 0 .569-.195.978-.454 1.43-.906.452-.452.712-.862.904-1.429.175-.515.227-.943.21-1.757-.015-.767-.044-.859-.344-1.069-.14-.099-.205-.117-.409-.117s-.269.018-.409.117c-.31.217-.328.281-.355 1.256-.022.802-.031.878-.128 1.131-.35.905-1.16 1.469-2.108 1.469-.948 0-1.758-.564-2.108-1.469-.097-.253-.106-.329-.128-1.131-.021-.769-.033-.875-.106-.999a.807.807 0 0 0-.847-.363m10 9a.883.883 0 0 0-.481.374c-.062.113-.071.277-.082 1.358l-.012 1.23H17.14c-.649 0-1.18.018-1.302.044-.758.163-.758 1.269 0 1.432.122.026.653.044 1.304.044h1.098v1.15c0 .668.018 1.212.042 1.299.108.39.52.618.92.51.22-.059.454-.287.513-.5.028-.099.045-.593.045-1.309v-1.15h1.098c.651 0 1.182-.018 1.304-.044.758-.163.758-1.269 0-1.432-.122-.026-.653-.044-1.302-.044h-1.096l-.012-1.23c-.011-1.155-.017-1.238-.094-1.369a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShoppingBagAdd);
export default ForwardRef;