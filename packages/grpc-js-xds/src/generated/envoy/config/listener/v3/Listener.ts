// Original file: deps/envoy-api/envoy/config/listener/v3/listener.proto

import type { Address as _envoy_config_core_v3_Address, Address__Output as _envoy_config_core_v3_Address__Output } from '../../../../envoy/config/core/v3/Address';
import type { FilterChain as _envoy_config_listener_v3_FilterChain, FilterChain__Output as _envoy_config_listener_v3_FilterChain__Output } from '../../../../envoy/config/listener/v3/FilterChain';
import type { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../../../../google/protobuf/BoolValue';
import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import type { Metadata as _envoy_config_core_v3_Metadata, Metadata__Output as _envoy_config_core_v3_Metadata__Output } from '../../../../envoy/config/core/v3/Metadata';
import type { ListenerFilter as _envoy_config_listener_v3_ListenerFilter, ListenerFilter__Output as _envoy_config_listener_v3_ListenerFilter__Output } from '../../../../envoy/config/listener/v3/ListenerFilter';
import type { SocketOption as _envoy_config_core_v3_SocketOption, SocketOption__Output as _envoy_config_core_v3_SocketOption__Output } from '../../../../envoy/config/core/v3/SocketOption';
import type { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../google/protobuf/Duration';
import type { TrafficDirection as _envoy_config_core_v3_TrafficDirection, TrafficDirection__Output as _envoy_config_core_v3_TrafficDirection__Output } from '../../../../envoy/config/core/v3/TrafficDirection';
import type { UdpListenerConfig as _envoy_config_listener_v3_UdpListenerConfig, UdpListenerConfig__Output as _envoy_config_listener_v3_UdpListenerConfig__Output } from '../../../../envoy/config/listener/v3/UdpListenerConfig';
import type { ApiListener as _envoy_config_listener_v3_ApiListener, ApiListener__Output as _envoy_config_listener_v3_ApiListener__Output } from '../../../../envoy/config/listener/v3/ApiListener';
import type { AccessLog as _envoy_config_accesslog_v3_AccessLog, AccessLog__Output as _envoy_config_accesslog_v3_AccessLog__Output } from '../../../../envoy/config/accesslog/v3/AccessLog';
import type { Matcher as _xds_type_matcher_v3_Matcher, Matcher__Output as _xds_type_matcher_v3_Matcher__Output } from '../../../../xds/type/matcher/v3/Matcher';
import type { AdditionalAddress as _envoy_config_listener_v3_AdditionalAddress, AdditionalAddress__Output as _envoy_config_listener_v3_AdditionalAddress__Output } from '../../../../envoy/config/listener/v3/AdditionalAddress';
import type { TypedExtensionConfig as _envoy_config_core_v3_TypedExtensionConfig, TypedExtensionConfig__Output as _envoy_config_core_v3_TypedExtensionConfig__Output } from '../../../../envoy/config/core/v3/TypedExtensionConfig';

/**
 * Configuration for listener connection balancing.
 */
export interface _envoy_config_listener_v3_Listener_ConnectionBalanceConfig {
  /**
   * If specified, the listener will use the exact connection balancer.
   */
  'exact_balance'?: (_envoy_config_listener_v3_Listener_ConnectionBalanceConfig_ExactBalance | null);
  /**
   * The listener will use the connection balancer according to ``type_url``. If ``type_url`` is invalid,
   * Envoy will not attempt to balance active connections between worker threads.
   * [#extension-category: envoy.network.connection_balance]
   */
  'extend_balance'?: (_envoy_config_core_v3_TypedExtensionConfig | null);
  'balance_type'?: "exact_balance"|"extend_balance";
}

/**
 * Configuration for listener connection balancing.
 */
export interface _envoy_config_listener_v3_Listener_ConnectionBalanceConfig__Output {
  /**
   * If specified, the listener will use the exact connection balancer.
   */
  'exact_balance'?: (_envoy_config_listener_v3_Listener_ConnectionBalanceConfig_ExactBalance__Output | null);
  /**
   * The listener will use the connection balancer according to ``type_url``. If ``type_url`` is invalid,
   * Envoy will not attempt to balance active connections between worker threads.
   * [#extension-category: envoy.network.connection_balance]
   */
  'extend_balance'?: (_envoy_config_core_v3_TypedExtensionConfig__Output | null);
  'balance_type'?: "exact_balance"|"extend_balance";
}

/**
 * [#not-implemented-hide:]
 */
export interface _envoy_config_listener_v3_Listener_DeprecatedV1 {
  /**
   * Whether the listener should bind to the port. A listener that doesn't
   * bind can only receive connections redirected from other listeners that
   * set use_original_dst parameter to true. Default is true.
   * 
   * This is deprecated. Use :ref:`Listener.bind_to_port
   * <envoy_v3_api_field_config.listener.v3.Listener.bind_to_port>`
   */
  'bind_to_port'?: (_google_protobuf_BoolValue | null);
}

/**
 * [#not-implemented-hide:]
 */
export interface _envoy_config_listener_v3_Listener_DeprecatedV1__Output {
  /**
   * Whether the listener should bind to the port. A listener that doesn't
   * bind can only receive connections redirected from other listeners that
   * set use_original_dst parameter to true. Default is true.
   * 
   * This is deprecated. Use :ref:`Listener.bind_to_port
   * <envoy_v3_api_field_config.listener.v3.Listener.bind_to_port>`
   */
  'bind_to_port': (_google_protobuf_BoolValue__Output | null);
}

// Original file: deps/envoy-api/envoy/config/listener/v3/listener.proto

export const _envoy_config_listener_v3_Listener_DrainType = {
  /**
   * Drain in response to calling /healthcheck/fail admin endpoint (along with the health check
   * filter), listener removal/modification, and hot restart.
   */
  DEFAULT: 'DEFAULT',
  /**
   * Drain in response to listener removal/modification and hot restart. This setting does not
   * include /healthcheck/fail. This setting may be desirable if Envoy is hosting both ingress
   * and egress listeners.
   */
  MODIFY_ONLY: 'MODIFY_ONLY',
} as const;

export type _envoy_config_listener_v3_Listener_DrainType =
  /**
   * Drain in response to calling /healthcheck/fail admin endpoint (along with the health check
   * filter), listener removal/modification, and hot restart.
   */
  | 'DEFAULT'
  | 0
  /**
   * Drain in response to listener removal/modification and hot restart. This setting does not
   * include /healthcheck/fail. This setting may be desirable if Envoy is hosting both ingress
   * and egress listeners.
   */
  | 'MODIFY_ONLY'
  | 1

export type _envoy_config_listener_v3_Listener_DrainType__Output = typeof _envoy_config_listener_v3_Listener_DrainType[keyof typeof _envoy_config_listener_v3_Listener_DrainType]

/**
 * A connection balancer implementation that does exact balancing. This means that a lock is
 * held during balancing so that connection counts are nearly exactly balanced between worker
 * threads. This is "nearly" exact in the sense that a connection might close in parallel thus
 * making the counts incorrect, but this should be rectified on the next accept. This balancer
 * sacrifices accept throughput for accuracy and should be used when there are a small number of
 * connections that rarely cycle (e.g., service mesh gRPC egress).
 */
export interface _envoy_config_listener_v3_Listener_ConnectionBalanceConfig_ExactBalance {
}

/**
 * A connection balancer implementation that does exact balancing. This means that a lock is
 * held during balancing so that connection counts are nearly exactly balanced between worker
 * threads. This is "nearly" exact in the sense that a connection might close in parallel thus
 * making the counts incorrect, but this should be rectified on the next accept. This balancer
 * sacrifices accept throughput for accuracy and should be used when there are a small number of
 * connections that rarely cycle (e.g., service mesh gRPC egress).
 */
export interface _envoy_config_listener_v3_Listener_ConnectionBalanceConfig_ExactBalance__Output {
}

/**
 * Configuration for envoy internal listener. All the future internal listener features should be added here.
 */
export interface _envoy_config_listener_v3_Listener_InternalListenerConfig {
}

/**
 * Configuration for envoy internal listener. All the future internal listener features should be added here.
 */
export interface _envoy_config_listener_v3_Listener_InternalListenerConfig__Output {
}

/**
 * [#next-free-field: 36]
 */
export interface Listener {
  /**
   * The unique name by which this listener is known. If no name is provided,
   * Envoy will allocate an internal UUID for the listener. If the listener is to be dynamically
   * updated or removed via :ref:`LDS <config_listeners_lds>` a unique name must be provided.
   */
  'name'?: (string);
  /**
   * The address that the listener should listen on. In general, the address must be unique, though
   * that is governed by the bind rules of the OS. E.g., multiple listeners can listen on port 0 on
   * Linux as the actual port will be allocated by the OS.
   * Required unless ``api_listener`` or ``listener_specifier`` is populated.
   */
  'address'?: (_envoy_config_core_v3_Address | null);
  /**
   * A list of filter chains to consider for this listener. The
   * :ref:`FilterChain <envoy_v3_api_msg_config.listener.v3.FilterChain>` with the most specific
   * :ref:`FilterChainMatch <envoy_v3_api_msg_config.listener.v3.FilterChainMatch>` criteria is used on a
   * connection.
   * 
   * Example using SNI for filter chain selection can be found in the
   * :ref:`FAQ entry <faq_how_to_setup_sni>`.
   */
  'filter_chains'?: (_envoy_config_listener_v3_FilterChain)[];
  /**
   * If a connection is redirected using ``iptables``, the port on which the proxy
   * receives it might be different from the original destination address. When this flag is set to
   * true, the listener hands off redirected connections to the listener associated with the
   * original destination address. If there is no listener associated with the original destination
   * address, the connection is handled by the listener that receives it. Defaults to false.
   */
  'use_original_dst'?: (_google_protobuf_BoolValue | null);
  /**
   * Soft limit on size of the listener’s new connection read and write buffers.
   * If unspecified, an implementation defined default is applied (1MiB).
   */
  'per_connection_buffer_limit_bytes'?: (_google_protobuf_UInt32Value | null);
  /**
   * Listener metadata.
   */
  'metadata'?: (_envoy_config_core_v3_Metadata | null);
  /**
   * [#not-implemented-hide:]
   * @deprecated
   */
  'deprecated_v1'?: (_envoy_config_listener_v3_Listener_DeprecatedV1 | null);
  /**
   * The type of draining to perform at a listener-wide level.
   */
  'drain_type'?: (_envoy_config_listener_v3_Listener_DrainType);
  /**
   * Listener filters have the opportunity to manipulate and augment the connection metadata that
   * is used in connection filter chain matching, for example. These filters are run before any in
   * :ref:`filter_chains <envoy_v3_api_field_config.listener.v3.Listener.filter_chains>`. Order matters as the
   * filters are processed sequentially right after a socket has been accepted by the listener, and
   * before a connection is created.
   * UDP Listener filters can be specified when the protocol in the listener socket address in
   * :ref:`protocol <envoy_v3_api_field_config.core.v3.SocketAddress.protocol>` is :ref:`UDP
   * <envoy_v3_api_enum_value_config.core.v3.SocketAddress.Protocol.UDP>` and no
   * :ref:`quic_options <envoy_v3_api_field_config.listener.v3.UdpListenerConfig.quic_options>` is specified in :ref:`udp_listener_config <envoy_v3_api_field_config.listener.v3.Listener.udp_listener_config>`.
   * QUIC listener filters can be specified when :ref:`quic_options
   * <envoy_v3_api_field_config.listener.v3.UdpListenerConfig.quic_options>` is
   * specified in :ref:`udp_listener_config <envoy_v3_api_field_config.listener.v3.Listener.udp_listener_config>`.
   * They are processed sequentially right before connection creation. And like TCP Listener filters, they can be used to manipulate the connection metadata and socket. But the difference is that they can't be used to pause connection creation.
   */
  'listener_filters'?: (_envoy_config_listener_v3_ListenerFilter)[];
  /**
   * Whether the listener should be set as a transparent socket.
   * When this flag is set to true, connections can be redirected to the listener using an
   * ``iptables`` ``TPROXY`` target, in which case the original source and destination addresses and
   * ports are preserved on accepted connections. This flag should be used in combination with
   * :ref:`an original_dst <config_listener_filters_original_dst>` :ref:`listener filter
   * <envoy_v3_api_field_config.listener.v3.Listener.listener_filters>` to mark the connections' local addresses as
   * "restored." This can be used to hand off each redirected connection to another listener
   * associated with the connection's destination address. Direct connections to the socket without
   * using ``TPROXY`` cannot be distinguished from connections redirected using ``TPROXY`` and are
   * therefore treated as if they were redirected.
   * When this flag is set to false, the listener's socket is explicitly reset as non-transparent.
   * Setting this flag requires Envoy to run with the ``CAP_NET_ADMIN`` capability.
   * When this flag is not set (default), the socket is not modified, i.e. the transparent option
   * is neither set nor reset.
   */
  'transparent'?: (_google_protobuf_BoolValue | null);
  /**
   * Whether the listener should set the ``IP_FREEBIND`` socket option. When this
   * flag is set to true, listeners can be bound to an IP address that is not
   * configured on the system running Envoy. When this flag is set to false, the
   * option ``IP_FREEBIND`` is disabled on the socket. When this flag is not set
   * (default), the socket is not modified, i.e. the option is neither enabled
   * nor disabled.
   */
  'freebind'?: (_google_protobuf_BoolValue | null);
  /**
   * Whether the listener should accept TCP Fast Open (TFO) connections.
   * When this flag is set to a value greater than 0, the option TCP_FASTOPEN is enabled on
   * the socket, with a queue length of the specified size
   * (see `details in RFC7413 <https://tools.ietf.org/html/rfc7413#section-5.1>`_).
   * When this flag is set to 0, the option TCP_FASTOPEN is disabled on the socket.
   * When this flag is not set (default), the socket is not modified,
   * i.e. the option is neither enabled nor disabled.
   * 
   * On Linux, the net.ipv4.tcp_fastopen kernel parameter must include flag 0x2 to enable
   * TCP_FASTOPEN.
   * See `ip-sysctl.txt <https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt>`_.
   * 
   * On macOS, only values of 0, 1, and unset are valid; other values may result in an error.
   * To set the queue length on macOS, set the net.inet.tcp.fastopen_backlog kernel parameter.
   */
  'tcp_fast_open_queue_length'?: (_google_protobuf_UInt32Value | null);
  /**
   * Additional socket options that may not be present in Envoy source code or
   * precompiled binaries. The socket options can be updated for a listener when
   * :ref:`enable_reuse_port <envoy_v3_api_field_config.listener.v3.Listener.enable_reuse_port>`
   * is ``true``. Otherwise, if socket options change during a listener update the update will be rejected
   * to make it clear that the options were not updated.
   */
  'socket_options'?: (_envoy_config_core_v3_SocketOption)[];
  /**
   * The timeout to wait for all listener filters to complete operation. If the timeout is reached,
   * the accepted socket is closed without a connection being created unless
   * ``continue_on_listener_filters_timeout`` is set to true. Specify 0 to disable the
   * timeout. If not specified, a default timeout of 15s is used.
   */
  'listener_filters_timeout'?: (_google_protobuf_Duration | null);
  /**
   * Specifies the intended direction of the traffic relative to the local Envoy.
   * This property is required on Windows for listeners using the original destination filter,
   * see :ref:`Original Destination <config_listener_filters_original_dst>`.
   */
  'traffic_direction'?: (_envoy_config_core_v3_TrafficDirection);
  /**
   * Whether a connection should be created when listener filters timeout. Default is false.
   * 
   * .. attention::
   * 
   * Some listener filters, such as :ref:`Proxy Protocol filter
   * <config_listener_filters_proxy_protocol>`, should not be used with this option. It will cause
   * unexpected behavior when a connection is created.
   */
  'continue_on_listener_filters_timeout'?: (boolean);
  /**
   * If the protocol in the listener socket address in :ref:`protocol
   * <envoy_v3_api_field_config.core.v3.SocketAddress.protocol>` is :ref:`UDP
   * <envoy_v3_api_enum_value_config.core.v3.SocketAddress.Protocol.UDP>`, this field specifies UDP
   * listener specific configuration.
   */
  'udp_listener_config'?: (_envoy_config_listener_v3_UdpListenerConfig | null);
  /**
   * Used to represent an API listener, which is used in non-proxy clients. The type of API
   * exposed to the non-proxy application depends on the type of API listener.
   * When this field is set, no other field except for :ref:`name<envoy_v3_api_field_config.listener.v3.Listener.name>`
   * should be set.
   * 
   * .. note::
   * 
   * Currently only one ApiListener can be installed; and it can only be done via bootstrap config,
   * not LDS.
   * 
   * [#next-major-version: In the v3 API, instead of this messy approach where the socket
   * listener fields are directly in the top-level Listener message and the API listener types
   * are in the ApiListener message, the socket listener messages should be in their own message,
   * and the top-level Listener should essentially be a oneof that selects between the
   * socket listener and the various types of API listener. That way, a given Listener message
   * can structurally only contain the fields of the relevant type.]
   */
  'api_listener'?: (_envoy_config_listener_v3_ApiListener | null);
  /**
   * The listener's connection balancer configuration, currently only applicable to TCP listeners.
   * If no configuration is specified, Envoy will not attempt to balance active connections between
   * worker threads.
   * 
   * In the scenario that the listener X redirects all the connections to the listeners Y1 and Y2
   * by setting :ref:`use_original_dst <envoy_v3_api_field_config.listener.v3.Listener.use_original_dst>` in X
   * and :ref:`bind_to_port <envoy_v3_api_field_config.listener.v3.Listener.bind_to_port>` to false in Y1 and Y2,
   * it is recommended to disable the balance config in listener X to avoid the cost of balancing, and
   * enable the balance config in Y1 and Y2 to balance the connections among the workers.
   */
  'connection_balance_config'?: (_envoy_config_listener_v3_Listener_ConnectionBalanceConfig | null);
  /**
   * Deprecated. Use ``enable_reuse_port`` instead.
   * @deprecated
   */
  'reuse_port'?: (boolean);
  /**
   * Configuration for :ref:`access logs <arch_overview_access_logs>`
   * emitted by this listener.
   */
  'access_log'?: (_envoy_config_accesslog_v3_AccessLog)[];
  /**
   * The maximum length a tcp listener's pending connections queue can grow to. If no value is
   * provided net.core.somaxconn will be used on Linux and 128 otherwise.
   */
  'tcp_backlog_size'?: (_google_protobuf_UInt32Value | null);
  /**
   * The default filter chain if none of the filter chain matches. If no default filter chain is supplied,
   * the connection will be closed. The filter chain match is ignored in this field.
   */
  'default_filter_chain'?: (_envoy_config_listener_v3_FilterChain | null);
  /**
   * Whether the listener should bind to the port. A listener that doesn't
   * bind can only receive connections redirected from other listeners that set
   * :ref:`use_original_dst <envoy_v3_api_field_config.listener.v3.Listener.use_original_dst>`
   * to true. Default is true.
   */
  'bind_to_port'?: (_google_protobuf_BoolValue | null);
  /**
   * Used to represent an internal listener which does not listen on OSI L4 address but can be used by the
   * :ref:`envoy cluster <envoy_v3_api_msg_config.cluster.v3.Cluster>` to create a user space connection to.
   * The internal listener acts as a TCP listener. It supports listener filters and network filter chains.
   * Upstream clusters refer to the internal listeners by their :ref:`name
   * <envoy_v3_api_field_config.listener.v3.Listener.name>`. :ref:`Address
   * <envoy_v3_api_field_config.listener.v3.Listener.address>` must not be set on the internal listeners.
   * 
   * There are some limitations that are derived from the implementation. The known limitations include:
   * 
   * * :ref:`ConnectionBalanceConfig <envoy_v3_api_msg_config.listener.v3.Listener.ConnectionBalanceConfig>` is not
   * allowed because both the cluster connection and the listener connection must be owned by the same dispatcher.
   * * :ref:`tcp_backlog_size <envoy_v3_api_field_config.listener.v3.Listener.tcp_backlog_size>`
   * * :ref:`freebind <envoy_v3_api_field_config.listener.v3.Listener.freebind>`
   * * :ref:`transparent <envoy_v3_api_field_config.listener.v3.Listener.transparent>`
   */
  'internal_listener'?: (_envoy_config_listener_v3_Listener_InternalListenerConfig | null);
  /**
   * Optional prefix to use on listener stats. If empty, the stats will be rooted at
   * ``listener.<address as string>.``. If non-empty, stats will be rooted at
   * ``listener.<stat_prefix>.``.
   */
  'stat_prefix'?: (string);
  /**
   * When this flag is set to true, listeners set the ``SO_REUSEPORT`` socket option and
   * create one socket for each worker thread. This makes inbound connections
   * distribute among worker threads roughly evenly in cases where there are a high number
   * of connections. When this flag is set to false, all worker threads share one socket. This field
   * defaults to true. The change of field will be rejected during an listener update when the
   * runtime flag ``envoy.reloadable_features.enable_update_listener_socket_options`` is enabled.
   * Otherwise, the update of this field will be ignored quietly.
   * 
   * .. attention::
   * 
   * Although this field defaults to true, it has different behavior on different platforms. See
   * the following text for more information.
   * 
   * * On Linux, reuse_port is respected for both TCP and UDP listeners. It also works correctly
   * with hot restart.
   * * On macOS, reuse_port for TCP does not do what it does on Linux. Instead of load balancing,
   * the last socket wins and receives all connections/packets. For TCP, reuse_port is force
   * disabled and the user is warned. For UDP, it is enabled, but only one worker will receive
   * packets. For QUIC/H3, SW routing will send packets to other workers. For "raw" UDP, only
   * a single worker will currently receive packets.
   * * On Windows, reuse_port for TCP has undefined behavior. It is force disabled and the user
   * is warned similar to macOS. It is left enabled for UDP with undefined behavior currently.
   */
  'enable_reuse_port'?: (_google_protobuf_BoolValue | null);
  /**
   * Enable MPTCP (multi-path TCP) on this listener. Clients will be allowed to establish
   * MPTCP connections. Non-MPTCP clients will fall back to regular TCP.
   */
  'enable_mptcp'?: (boolean);
  /**
   * Whether the listener should limit connections based upon the value of
   * :ref:`global_downstream_max_connections <config_overload_manager_limiting_connections>`.
   */
  'ignore_global_conn_limit'?: (boolean);
  /**
   * :ref:`Matcher API <arch_overview_matching_listener>` resolving the filter chain name from the
   * network properties. This matcher is used as a replacement for the filter chain match condition
   * :ref:`filter_chain_match
   * <envoy_v3_api_field_config.listener.v3.FilterChain.filter_chain_match>`. If specified, all
   * :ref:`filter_chains <envoy_v3_api_field_config.listener.v3.Listener.filter_chains>` must have a
   * non-empty and unique :ref:`name <envoy_v3_api_field_config.listener.v3.FilterChain.name>` field
   * and not specify :ref:`filter_chain_match
   * <envoy_v3_api_field_config.listener.v3.FilterChain.filter_chain_match>` field.
   * 
   * .. note::
   * 
   * Once matched, each connection is permanently bound to its filter chain.
   * If the matcher changes but the filter chain remains the same, the
   * connections bound to the filter chain are not drained. If, however, the
   * filter chain is removed or structurally modified, then the drain for its
   * connections is initiated.
   */
  'filter_chain_matcher'?: (_xds_type_matcher_v3_Matcher | null);
  /**
   * The additional addresses the listener should listen on. The addresses must be unique across all
   * listeners. Multiple addresses with port 0 can be supplied. When using multiple addresses in a single listener,
   * all addresses use the same protocol, and multiple internal addresses are not supported.
   */
  'additional_addresses'?: (_envoy_config_listener_v3_AdditionalAddress)[];
  /**
   * The maximum number of connections to accept from the kernel per socket
   * event. Envoy may decide to close these connections after accepting them
   * from the kernel e.g. due to load shedding, or other policies.
   * If there are more than max_connections_to_accept_per_socket_event
   * connections pending accept, connections over this threshold will be
   * accepted in later event loop iterations.
   * If no value is provided Envoy will accept all connections pending accept
   * from the kernel.
   */
  'max_connections_to_accept_per_socket_event'?: (_google_protobuf_UInt32Value | null);
  /**
   * Whether the listener bypasses configured overload manager actions.
   */
  'bypass_overload_manager'?: (boolean);
  /**
   * The exclusive listener type and the corresponding config.
   */
  'listener_specifier'?: "internal_listener";
}

/**
 * [#next-free-field: 36]
 */
export interface Listener__Output {
  /**
   * The unique name by which this listener is known. If no name is provided,
   * Envoy will allocate an internal UUID for the listener. If the listener is to be dynamically
   * updated or removed via :ref:`LDS <config_listeners_lds>` a unique name must be provided.
   */
  'name': (string);
  /**
   * The address that the listener should listen on. In general, the address must be unique, though
   * that is governed by the bind rules of the OS. E.g., multiple listeners can listen on port 0 on
   * Linux as the actual port will be allocated by the OS.
   * Required unless ``api_listener`` or ``listener_specifier`` is populated.
   */
  'address': (_envoy_config_core_v3_Address__Output | null);
  /**
   * A list of filter chains to consider for this listener. The
   * :ref:`FilterChain <envoy_v3_api_msg_config.listener.v3.FilterChain>` with the most specific
   * :ref:`FilterChainMatch <envoy_v3_api_msg_config.listener.v3.FilterChainMatch>` criteria is used on a
   * connection.
   * 
   * Example using SNI for filter chain selection can be found in the
   * :ref:`FAQ entry <faq_how_to_setup_sni>`.
   */
  'filter_chains': (_envoy_config_listener_v3_FilterChain__Output)[];
  /**
   * If a connection is redirected using ``iptables``, the port on which the proxy
   * receives it might be different from the original destination address. When this flag is set to
   * true, the listener hands off redirected connections to the listener associated with the
   * original destination address. If there is no listener associated with the original destination
   * address, the connection is handled by the listener that receives it. Defaults to false.
   */
  'use_original_dst': (_google_protobuf_BoolValue__Output | null);
  /**
   * Soft limit on size of the listener’s new connection read and write buffers.
   * If unspecified, an implementation defined default is applied (1MiB).
   */
  'per_connection_buffer_limit_bytes': (_google_protobuf_UInt32Value__Output | null);
  /**
   * Listener metadata.
   */
  'metadata': (_envoy_config_core_v3_Metadata__Output | null);
  /**
   * [#not-implemented-hide:]
   * @deprecated
   */
  'deprecated_v1': (_envoy_config_listener_v3_Listener_DeprecatedV1__Output | null);
  /**
   * The type of draining to perform at a listener-wide level.
   */
  'drain_type': (_envoy_config_listener_v3_Listener_DrainType__Output);
  /**
   * Listener filters have the opportunity to manipulate and augment the connection metadata that
   * is used in connection filter chain matching, for example. These filters are run before any in
   * :ref:`filter_chains <envoy_v3_api_field_config.listener.v3.Listener.filter_chains>`. Order matters as the
   * filters are processed sequentially right after a socket has been accepted by the listener, and
   * before a connection is created.
   * UDP Listener filters can be specified when the protocol in the listener socket address in
   * :ref:`protocol <envoy_v3_api_field_config.core.v3.SocketAddress.protocol>` is :ref:`UDP
   * <envoy_v3_api_enum_value_config.core.v3.SocketAddress.Protocol.UDP>` and no
   * :ref:`quic_options <envoy_v3_api_field_config.listener.v3.UdpListenerConfig.quic_options>` is specified in :ref:`udp_listener_config <envoy_v3_api_field_config.listener.v3.Listener.udp_listener_config>`.
   * QUIC listener filters can be specified when :ref:`quic_options
   * <envoy_v3_api_field_config.listener.v3.UdpListenerConfig.quic_options>` is
   * specified in :ref:`udp_listener_config <envoy_v3_api_field_config.listener.v3.Listener.udp_listener_config>`.
   * They are processed sequentially right before connection creation. And like TCP Listener filters, they can be used to manipulate the connection metadata and socket. But the difference is that they can't be used to pause connection creation.
   */
  'listener_filters': (_envoy_config_listener_v3_ListenerFilter__Output)[];
  /**
   * Whether the listener should be set as a transparent socket.
   * When this flag is set to true, connections can be redirected to the listener using an
   * ``iptables`` ``TPROXY`` target, in which case the original source and destination addresses and
   * ports are preserved on accepted connections. This flag should be used in combination with
   * :ref:`an original_dst <config_listener_filters_original_dst>` :ref:`listener filter
   * <envoy_v3_api_field_config.listener.v3.Listener.listener_filters>` to mark the connections' local addresses as
   * "restored." This can be used to hand off each redirected connection to another listener
   * associated with the connection's destination address. Direct connections to the socket without
   * using ``TPROXY`` cannot be distinguished from connections redirected using ``TPROXY`` and are
   * therefore treated as if they were redirected.
   * When this flag is set to false, the listener's socket is explicitly reset as non-transparent.
   * Setting this flag requires Envoy to run with the ``CAP_NET_ADMIN`` capability.
   * When this flag is not set (default), the socket is not modified, i.e. the transparent option
   * is neither set nor reset.
   */
  'transparent': (_google_protobuf_BoolValue__Output | null);
  /**
   * Whether the listener should set the ``IP_FREEBIND`` socket option. When this
   * flag is set to true, listeners can be bound to an IP address that is not
   * configured on the system running Envoy. When this flag is set to false, the
   * option ``IP_FREEBIND`` is disabled on the socket. When this flag is not set
   * (default), the socket is not modified, i.e. the option is neither enabled
   * nor disabled.
   */
  'freebind': (_google_protobuf_BoolValue__Output | null);
  /**
   * Whether the listener should accept TCP Fast Open (TFO) connections.
   * When this flag is set to a value greater than 0, the option TCP_FASTOPEN is enabled on
   * the socket, with a queue length of the specified size
   * (see `details in RFC7413 <https://tools.ietf.org/html/rfc7413#section-5.1>`_).
   * When this flag is set to 0, the option TCP_FASTOPEN is disabled on the socket.
   * When this flag is not set (default), the socket is not modified,
   * i.e. the option is neither enabled nor disabled.
   * 
   * On Linux, the net.ipv4.tcp_fastopen kernel parameter must include flag 0x2 to enable
   * TCP_FASTOPEN.
   * See `ip-sysctl.txt <https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt>`_.
   * 
   * On macOS, only values of 0, 1, and unset are valid; other values may result in an error.
   * To set the queue length on macOS, set the net.inet.tcp.fastopen_backlog kernel parameter.
   */
  'tcp_fast_open_queue_length': (_google_protobuf_UInt32Value__Output | null);
  /**
   * Additional socket options that may not be present in Envoy source code or
   * precompiled binaries. The socket options can be updated for a listener when
   * :ref:`enable_reuse_port <envoy_v3_api_field_config.listener.v3.Listener.enable_reuse_port>`
   * is ``true``. Otherwise, if socket options change during a listener update the update will be rejected
   * to make it clear that the options were not updated.
   */
  'socket_options': (_envoy_config_core_v3_SocketOption__Output)[];
  /**
   * The timeout to wait for all listener filters to complete operation. If the timeout is reached,
   * the accepted socket is closed without a connection being created unless
   * ``continue_on_listener_filters_timeout`` is set to true. Specify 0 to disable the
   * timeout. If not specified, a default timeout of 15s is used.
   */
  'listener_filters_timeout': (_google_protobuf_Duration__Output | null);
  /**
   * Specifies the intended direction of the traffic relative to the local Envoy.
   * This property is required on Windows for listeners using the original destination filter,
   * see :ref:`Original Destination <config_listener_filters_original_dst>`.
   */
  'traffic_direction': (_envoy_config_core_v3_TrafficDirection__Output);
  /**
   * Whether a connection should be created when listener filters timeout. Default is false.
   * 
   * .. attention::
   * 
   * Some listener filters, such as :ref:`Proxy Protocol filter
   * <config_listener_filters_proxy_protocol>`, should not be used with this option. It will cause
   * unexpected behavior when a connection is created.
   */
  'continue_on_listener_filters_timeout': (boolean);
  /**
   * If the protocol in the listener socket address in :ref:`protocol
   * <envoy_v3_api_field_config.core.v3.SocketAddress.protocol>` is :ref:`UDP
   * <envoy_v3_api_enum_value_config.core.v3.SocketAddress.Protocol.UDP>`, this field specifies UDP
   * listener specific configuration.
   */
  'udp_listener_config': (_envoy_config_listener_v3_UdpListenerConfig__Output | null);
  /**
   * Used to represent an API listener, which is used in non-proxy clients. The type of API
   * exposed to the non-proxy application depends on the type of API listener.
   * When this field is set, no other field except for :ref:`name<envoy_v3_api_field_config.listener.v3.Listener.name>`
   * should be set.
   * 
   * .. note::
   * 
   * Currently only one ApiListener can be installed; and it can only be done via bootstrap config,
   * not LDS.
   * 
   * [#next-major-version: In the v3 API, instead of this messy approach where the socket
   * listener fields are directly in the top-level Listener message and the API listener types
   * are in the ApiListener message, the socket listener messages should be in their own message,
   * and the top-level Listener should essentially be a oneof that selects between the
   * socket listener and the various types of API listener. That way, a given Listener message
   * can structurally only contain the fields of the relevant type.]
   */
  'api_listener': (_envoy_config_listener_v3_ApiListener__Output | null);
  /**
   * The listener's connection balancer configuration, currently only applicable to TCP listeners.
   * If no configuration is specified, Envoy will not attempt to balance active connections between
   * worker threads.
   * 
   * In the scenario that the listener X redirects all the connections to the listeners Y1 and Y2
   * by setting :ref:`use_original_dst <envoy_v3_api_field_config.listener.v3.Listener.use_original_dst>` in X
   * and :ref:`bind_to_port <envoy_v3_api_field_config.listener.v3.Listener.bind_to_port>` to false in Y1 and Y2,
   * it is recommended to disable the balance config in listener X to avoid the cost of balancing, and
   * enable the balance config in Y1 and Y2 to balance the connections among the workers.
   */
  'connection_balance_config': (_envoy_config_listener_v3_Listener_ConnectionBalanceConfig__Output | null);
  /**
   * Deprecated. Use ``enable_reuse_port`` instead.
   * @deprecated
   */
  'reuse_port': (boolean);
  /**
   * Configuration for :ref:`access logs <arch_overview_access_logs>`
   * emitted by this listener.
   */
  'access_log': (_envoy_config_accesslog_v3_AccessLog__Output)[];
  /**
   * The maximum length a tcp listener's pending connections queue can grow to. If no value is
   * provided net.core.somaxconn will be used on Linux and 128 otherwise.
   */
  'tcp_backlog_size': (_google_protobuf_UInt32Value__Output | null);
  /**
   * The default filter chain if none of the filter chain matches. If no default filter chain is supplied,
   * the connection will be closed. The filter chain match is ignored in this field.
   */
  'default_filter_chain': (_envoy_config_listener_v3_FilterChain__Output | null);
  /**
   * Whether the listener should bind to the port. A listener that doesn't
   * bind can only receive connections redirected from other listeners that set
   * :ref:`use_original_dst <envoy_v3_api_field_config.listener.v3.Listener.use_original_dst>`
   * to true. Default is true.
   */
  'bind_to_port': (_google_protobuf_BoolValue__Output | null);
  /**
   * Used to represent an internal listener which does not listen on OSI L4 address but can be used by the
   * :ref:`envoy cluster <envoy_v3_api_msg_config.cluster.v3.Cluster>` to create a user space connection to.
   * The internal listener acts as a TCP listener. It supports listener filters and network filter chains.
   * Upstream clusters refer to the internal listeners by their :ref:`name
   * <envoy_v3_api_field_config.listener.v3.Listener.name>`. :ref:`Address
   * <envoy_v3_api_field_config.listener.v3.Listener.address>` must not be set on the internal listeners.
   * 
   * There are some limitations that are derived from the implementation. The known limitations include:
   * 
   * * :ref:`ConnectionBalanceConfig <envoy_v3_api_msg_config.listener.v3.Listener.ConnectionBalanceConfig>` is not
   * allowed because both the cluster connection and the listener connection must be owned by the same dispatcher.
   * * :ref:`tcp_backlog_size <envoy_v3_api_field_config.listener.v3.Listener.tcp_backlog_size>`
   * * :ref:`freebind <envoy_v3_api_field_config.listener.v3.Listener.freebind>`
   * * :ref:`transparent <envoy_v3_api_field_config.listener.v3.Listener.transparent>`
   */
  'internal_listener'?: (_envoy_config_listener_v3_Listener_InternalListenerConfig__Output | null);
  /**
   * Optional prefix to use on listener stats. If empty, the stats will be rooted at
   * ``listener.<address as string>.``. If non-empty, stats will be rooted at
   * ``listener.<stat_prefix>.``.
   */
  'stat_prefix': (string);
  /**
   * When this flag is set to true, listeners set the ``SO_REUSEPORT`` socket option and
   * create one socket for each worker thread. This makes inbound connections
   * distribute among worker threads roughly evenly in cases where there are a high number
   * of connections. When this flag is set to false, all worker threads share one socket. This field
   * defaults to true. The change of field will be rejected during an listener update when the
   * runtime flag ``envoy.reloadable_features.enable_update_listener_socket_options`` is enabled.
   * Otherwise, the update of this field will be ignored quietly.
   * 
   * .. attention::
   * 
   * Although this field defaults to true, it has different behavior on different platforms. See
   * the following text for more information.
   * 
   * * On Linux, reuse_port is respected for both TCP and UDP listeners. It also works correctly
   * with hot restart.
   * * On macOS, reuse_port for TCP does not do what it does on Linux. Instead of load balancing,
   * the last socket wins and receives all connections/packets. For TCP, reuse_port is force
   * disabled and the user is warned. For UDP, it is enabled, but only one worker will receive
   * packets. For QUIC/H3, SW routing will send packets to other workers. For "raw" UDP, only
   * a single worker will currently receive packets.
   * * On Windows, reuse_port for TCP has undefined behavior. It is force disabled and the user
   * is warned similar to macOS. It is left enabled for UDP with undefined behavior currently.
   */
  'enable_reuse_port': (_google_protobuf_BoolValue__Output | null);
  /**
   * Enable MPTCP (multi-path TCP) on this listener. Clients will be allowed to establish
   * MPTCP connections. Non-MPTCP clients will fall back to regular TCP.
   */
  'enable_mptcp': (boolean);
  /**
   * Whether the listener should limit connections based upon the value of
   * :ref:`global_downstream_max_connections <config_overload_manager_limiting_connections>`.
   */
  'ignore_global_conn_limit': (boolean);
  /**
   * :ref:`Matcher API <arch_overview_matching_listener>` resolving the filter chain name from the
   * network properties. This matcher is used as a replacement for the filter chain match condition
   * :ref:`filter_chain_match
   * <envoy_v3_api_field_config.listener.v3.FilterChain.filter_chain_match>`. If specified, all
   * :ref:`filter_chains <envoy_v3_api_field_config.listener.v3.Listener.filter_chains>` must have a
   * non-empty and unique :ref:`name <envoy_v3_api_field_config.listener.v3.FilterChain.name>` field
   * and not specify :ref:`filter_chain_match
   * <envoy_v3_api_field_config.listener.v3.FilterChain.filter_chain_match>` field.
   * 
   * .. note::
   * 
   * Once matched, each connection is permanently bound to its filter chain.
   * If the matcher changes but the filter chain remains the same, the
   * connections bound to the filter chain are not drained. If, however, the
   * filter chain is removed or structurally modified, then the drain for its
   * connections is initiated.
   */
  'filter_chain_matcher': (_xds_type_matcher_v3_Matcher__Output | null);
  /**
   * The additional addresses the listener should listen on. The addresses must be unique across all
   * listeners. Multiple addresses with port 0 can be supplied. When using multiple addresses in a single listener,
   * all addresses use the same protocol, and multiple internal addresses are not supported.
   */
  'additional_addresses': (_envoy_config_listener_v3_AdditionalAddress__Output)[];
  /**
   * The maximum number of connections to accept from the kernel per socket
   * event. Envoy may decide to close these connections after accepting them
   * from the kernel e.g. due to load shedding, or other policies.
   * If there are more than max_connections_to_accept_per_socket_event
   * connections pending accept, connections over this threshold will be
   * accepted in later event loop iterations.
   * If no value is provided Envoy will accept all connections pending accept
   * from the kernel.
   */
  'max_connections_to_accept_per_socket_event': (_google_protobuf_UInt32Value__Output | null);
  /**
   * Whether the listener bypasses configured overload manager actions.
   */
  'bypass_overload_manager': (boolean);
  /**
   * The exclusive listener type and the corresponding config.
   */
  'listener_specifier'?: "internal_listener";
}
