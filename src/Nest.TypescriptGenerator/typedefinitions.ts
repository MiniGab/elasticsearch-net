interface short {}
interface byte {}
interface integer {}
interface long {}
interface float {}
interface double {}

enum TimeUnit {
	ms = 0,
	s = 1,
	m = 2,
	h = 3,
	d = 4,
	w = 5,
	M = 6,
	y = 7
}
enum SimilarityOption {
	default = 0,
	BM25 = 1
}
enum DynamicMapping {
	allow = 0,
	ignore = 1,
	strict = 2
}
enum SortOrder {
	asc = 0,
	desc = 1
}
enum SortMode {
	min = 0,
	max = 1,
	sum = 2,
	avg = 3
}
enum HighlighterType {
	plain = 0,
	postings = 1,
	fvh = 2
}
enum ScoreMode {
	avg = 0,
	first = 1,
	max = 2,
	min = 3,
	multiply = 4,
	total = 5,
	sum = 6
}
enum RewriteMultiTerm {
	constant_score = 0,
	scoring_boolean = 1,
	constant_score_boolean = 2,
	top_terms_N = 3,
	top_terms_boost_N = 4,
	top_terms_blended_freqs_N = 5
}
enum TextQueryType {
	best_fields = 0,
	most_fields = 1,
	cross_fields = 2,
	phrase = 3,
	phrase_prefix = 4
}
enum Operator {
	and = 0,
	or = 1
}
enum ZeroTermsQuery {
	all = 0,
	none = 1
}
enum ChildScoreMode {
	none = 0,
	avg = 1,
	sum = 2,
	max = 3,
	min = 4
}
enum ParentScoreMode {
	none = 0,
	score = 1
}
enum SimpleQueryStringFlags {
	NONE = 1,
	AND = 2,
	OR = 4,
	NOT = 8,
	PREFIX = 16,
	PHRASE = 32,
	PRECEDENCE = 64,
	ESCAPE = 128,
	WHITESPACE = 256,
	FUZZY = 512,
	NEAR = 1024,
	SLOP = 2048,
	ALL = 4096
}
enum NestedScoreMode {
	avg = 0,
	total = 1,
	max = 2,
	none = 3
}
enum FunctionScoreMode {
	multiply = 0,
	sum = 1,
	avg = 2,
	first = 3,
	max = 4,
	min = 5
}
enum FunctionBoostMode {
	multiply = 0,
	replace = 1,
	sum = 2,
	avg = 3,
	max = 4,
	min = 5
}
enum GeoExecution {
	memory = 0,
	indexed = 1
}
enum GeoValidationMethod {
	coerce = 0,
	ignore_malformed = 1,
	strict = 2
}
enum DistanceUnit {
	in = 0,
	ft = 1,
	yd = 2,
	mi = 3,
	nmi = 4,
	km = 5,
	m = 6,
	cm = 7,
	mm = 8
}
enum GeoOptimizeBBox {
	memory = 0,
	indexed = 1,
	none = 2
}
enum GeoDistanceType {
	sloppy_arc = 0,
	arc = 1,
	plane = 2
}
enum GeoHashPrecision {
	Precision1 = 1,
	Precision2 = 2,
	Precision3 = 3,
	Precision4 = 4,
	Precision5 = 5,
	Precision6 = 6,
	Precision7 = 7,
	Precision8 = 8,
	Precision9 = 9,
	Precision10 = 10,
	Precision11 = 11,
	Precision12 = 12
}
enum TermsAggregationExecutionHint {
	map = 0,
	global_ordinals = 1,
	global_ordinals_hash = 2,
	global_ordinals_low_cardinality = 3
}
enum TermsAggregationCollectMode {
	depth_first = 0,
	breadth_first = 1
}
enum SamplerAggregationExecutionHint {
	map = 0,
	global_ordinals = 1,
	bytes_hash = 2
}
enum ClusterStatus {
	green = 0,
	yellow = 1,
	red = 2
}
interface CatResponse<TCatRecord> extends ResponseBase {
	Records: TCatRecord[];
}
interface CatAliasesRequest extends RequestBase<CatAliasesRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ H: string[];
	/** mapped on body but might only proxy to request querystring */ Help: boolean;
	/** mapped on body but might only proxy to request querystring */ V: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface RequestBase<TParameters> {
}
interface Time {
	Factor: double;
	Interval: TimeUnit;
	Milliseconds: double;
}
interface CatAllocationRequest extends RequestBase<CatAllocationRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Bytes: Bytes;
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ H: string[];
	/** mapped on body but might only proxy to request querystring */ Help: boolean;
	/** mapped on body but might only proxy to request querystring */ V: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface CatCountRequest extends RequestBase<CatCountRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ H: string[];
	/** mapped on body but might only proxy to request querystring */ Help: boolean;
	/** mapped on body but might only proxy to request querystring */ V: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface CatFielddataRequest extends RequestBase<CatFielddataRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Bytes: Bytes;
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ H: string[];
	/** mapped on body but might only proxy to request querystring */ Help: boolean;
	/** mapped on body but might only proxy to request querystring */ V: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface CatHealthRequest extends RequestBase<CatHealthRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ H: string[];
	/** mapped on body but might only proxy to request querystring */ Help: boolean;
	/** mapped on body but might only proxy to request querystring */ Ts: boolean;
	/** mapped on body but might only proxy to request querystring */ V: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface CatIndicesRequest extends RequestBase<CatIndicesRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Bytes: Bytes;
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ H: string[];
	/** mapped on body but might only proxy to request querystring */ Help: boolean;
	/** mapped on body but might only proxy to request querystring */ Pri: boolean;
	/** mapped on body but might only proxy to request querystring */ V: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface CatMasterRequest extends RequestBase<CatMasterRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ H: string[];
	/** mapped on body but might only proxy to request querystring */ Help: boolean;
	/** mapped on body but might only proxy to request querystring */ V: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface CatNodesRequest extends RequestBase<CatNodesRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ H: string[];
	/** mapped on body but might only proxy to request querystring */ Help: boolean;
	/** mapped on body but might only proxy to request querystring */ V: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface CatPendingTasksRequest extends RequestBase<CatPendingTasksRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ H: string[];
	/** mapped on body but might only proxy to request querystring */ Help: boolean;
	/** mapped on body but might only proxy to request querystring */ V: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface CatPluginsRequest extends RequestBase<CatPluginsRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ H: string[];
	/** mapped on body but might only proxy to request querystring */ Help: boolean;
	/** mapped on body but might only proxy to request querystring */ V: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface CatRecoveryRequest extends RequestBase<CatRecoveryRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Bytes: Bytes;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ H: string[];
	/** mapped on body but might only proxy to request querystring */ Help: boolean;
	/** mapped on body but might only proxy to request querystring */ V: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface CatSegmentsRequest extends RequestBase<CatSegmentsRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ H: string[];
	/** mapped on body but might only proxy to request querystring */ Help: boolean;
	/** mapped on body but might only proxy to request querystring */ V: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface CatShardsRequest extends RequestBase<CatShardsRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ H: string[];
	/** mapped on body but might only proxy to request querystring */ Help: boolean;
	/** mapped on body but might only proxy to request querystring */ V: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface CatThreadPoolRequest extends RequestBase<CatThreadPoolRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ H: string[];
	/** mapped on body but might only proxy to request querystring */ Help: boolean;
	/** mapped on body but might only proxy to request querystring */ V: boolean;
	/** mapped on body but might only proxy to request querystring */ FullId: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface ClusterHealthRequest extends RequestBase<ClusterHealthRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Level: Level;
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ Timeout: Time;
	/** mapped on body but might only proxy to request querystring */ WaitForActiveShards: long;
	/** mapped on body but might only proxy to request querystring */ WaitForNodes: string;
	/** mapped on body but might only proxy to request querystring */ WaitForRelocatingShards: long;
	/** mapped on body but might only proxy to request querystring */ WaitForStatus: WaitForStatus;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface ClusterHealthResponse extends ResponseBase {
	cluster_name: string;
	status: string;
	timed_out: boolean;
	number_of_nodes: integer;
	number_of_data_nodes: integer;
	active_primary_shards: integer;
	active_shards: integer;
	relocating_shards: integer;
	initializing_shards: integer;
	unassigned_shards: integer;
	number_of_pending_tasks: integer;
	/** type has a custom json converter defined */ indices: KeyValuePair<string, IndexHealthStats>[];
}
interface ResponseBase {
	IsValid: boolean;
	ApiCall: IApiCallDetails;
	ServerError: ServerError;
	OriginalException: Exception;
	DebugInformation: string;
}
interface IndexHealthStats {
	status: string;
	number_of_shards: integer;
	number_of_replicas: integer;
	active_primary_shards: integer;
	active_shards: integer;
	relocating_shards: integer;
	initializing_shards: integer;
	unassigned_shards: integer;
	/** type has a custom json converter defined */ shards: KeyValuePair<string, ShardHealthStats>[];
}
interface ShardHealthStats {
	status: string;
	primary_active: boolean;
	active_shards: integer;
	relocating_shards: integer;
	initializing_shards: integer;
	unassigned_shards: integer;
}
interface ClusterPendingTasksRequest extends RequestBase<ClusterPendingTasksRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface ClusterPendingTasksResponse extends ResponseBase {
	tasks: PendingTask[];
}
interface PendingTask {
	insert_order: integer;
	priority: string;
	source: string;
	time_in_queue_millis: integer;
	time_in_queue: string;
}
interface /** type has a custom json converter defined */ ClusterRerouteRequest extends RequestBase<ClusterRerouteRequestParameters> {
	commands: IClusterRerouteCommand[];
	/** mapped on body but might only proxy to request querystring */ DryRun: boolean;
	/** mapped on body but might only proxy to request querystring */ Explain: boolean;
	/** mapped on body but might only proxy to request querystring */ Metric: string[];
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ Timeout: Time;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface IClusterRerouteCommand {
	Name: string;
}
interface ClusterRerouteResponse extends ResponseBase {
	Version: integer;
	state: ClusterRerouteState;
	explanations: ClusterRerouteExplanation[];
}
interface ClusterRerouteState {
	version: integer;
	master_node: string;
	blocks: BlockState;
	/** type has a custom json converter defined */ nodes: KeyValuePair<string, NodeState>[];
	routing_table: RoutingTableState;
	routing_nodes: RoutingNodesState;
}
interface BlockState {
	read_only: boolean;
}
interface NodeState {
	name: string;
	transport_address: string;
	/** type has a custom json converter defined */ attributes: KeyValuePair<string, string>[];
}
interface RoutingTableState {
	/** type has a custom json converter defined */ indices: KeyValuePair<string, IndexRoutingTable>[];
}
interface IndexRoutingTable {
	/** type has a custom json converter defined */ shards: KeyValuePair<string, RoutingShard[]>[];
}
interface RoutingShard {
	allocation_id: AllocationId;
	state: string;
	primary: boolean;
	node: string;
	relocating_node: string;
	shard: integer;
	version: long;
	index: string;
}
interface AllocationId {
	id: string;
}
interface RoutingNodesState {
	unassigned: RoutingShard[];
	nodes: KeyValuePair<string, RoutingShard[]>[];
}
interface ClusterRerouteExplanation {
	command: string;
	parameters: ClusterRerouteParameters;
	decisions: ClusterRerouteDecision[];
}
interface ClusterRerouteParameters {
	index: string;
	shard: integer;
	from_node: string;
	to_node: string;
	node: string;
	allow_primary: boolean;
}
interface ClusterRerouteDecision {
	decider: string;
	decision: string;
	explanation: string;
}
interface ClusterGetSettingsRequest extends RequestBase<ClusterGetSettingsRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ FlatSettings: boolean;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ Timeout: Time;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface ClusterGetSettingsResponse extends ResponseBase {
	persistent: KeyValuePair<string, any>[];
	transient: KeyValuePair<string, any>[];
}
interface ClusterPutSettingsRequest extends RequestBase<ClusterPutSettingsRequestParameters> {
	persistent: KeyValuePair<string, any>[];
	transient: KeyValuePair<string, any>[];
	/** mapped on body but might only proxy to request querystring */ FlatSettings: boolean;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ Timeout: Time;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface ClusterPutSettingsResponse extends ResponseBase {
	acknowledged: boolean;
	persistent: KeyValuePair<string, any>[];
	transient: KeyValuePair<string, any>[];
}
interface ClusterStateRequest extends RequestBase<ClusterStateRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ FlatSettings: boolean;
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface ClusterStateResponse extends ResponseBase {
	cluster_name: string;
	master_node: string;
	state_uuid: string;
	version: long;
	/** type has a custom json converter defined */ nodes: KeyValuePair<string, NodeState>[];
	metadata: MetadataState;
	routing_table: RoutingTableState;
	routing_nodes: RoutingNodesState;
	blocks: BlockState;
}
interface MetadataState {
	/** type has a custom json converter defined */ templates: KeyValuePair<string, TemplateMapping>[];
	cluster_uuid: string;
	/** type has a custom json converter defined */ indices: KeyValuePair<string, MetadataIndexState>[];
}
interface TemplateMapping {
	template: string;
	order: integer;
	settings: KeyValuePair<string, any>[];
	mappings: KeyValuePair<TypeName, ITypeMapping>[];
	warmers: KeyValuePair<TypeName, IWarmer>[];
	aliases: KeyValuePair<IndexName, IAlias>[];
}
interface TypeName {
	Name: string;
	Type: Type;
}
interface ITypeMapping {
	dynamic_date_formats: string[];
	date_detection: boolean;
	numeric_detection: boolean;
	/** type has a custom json converter defined */ transform: IMappingTransform[];
	analyzer: string;
	search_analyzer: string;
	_source: ISourceField;
	_all: IAllField;
	_parent: IParentField;
	_routing: IRoutingField;
	_index: IIndexField;
	_size: ISizeField;
	_timestamp: ITimestampField;
	_field_names: IFieldNamesField;
	_ttl: ITtlField;
	/** type has a custom json converter defined */ _meta: KeyValuePair<string, any>[];
	dynamic_templates: KeyValuePair<string, IDynamicTemplate>[];
	dynamic: DynamicMapping;
	properties: KeyValuePair<PropertyName, IProperty>[];
}
interface IMappingTransform {
	script: string;
	script_file: string;
	params: KeyValuePair<string, string>[];
	lang: string;
}
interface ISourceField {
	enabled: boolean;
	compress: boolean;
	compress_threshold: string;
	includes: string[];
	excludes: string[];
}
interface IAllField {
	enabled: boolean;
	store: boolean;
	store_term_vectors: boolean;
	store_term_vector_offsets: boolean;
	store_term_vector_positions: boolean;
	store_term_vector_payloads: boolean;
	omit_norms: boolean;
	analyzer: string;
	search_analyzer: string;
	similarity: string;
}
interface IParentField {
	type: TypeName;
}
interface IRoutingField {
	required: boolean;
}
interface IIndexField {
	enabled: boolean;
}
interface ISizeField {
	enabled: boolean;
}
interface ITimestampField {
	enabled: boolean;
	path: Field;
	format: string;
	default: string;
	ignore_missing: boolean;
}
interface Field {
	Name: string;
	Expression: Expression;
	Property: PropertyInfo;
	Boost: double;
}
interface IFieldNamesField {
	enabled: boolean;
}
interface ITtlField {
	enabled: boolean;
	default: Time;
}
interface IDynamicTemplate {
	match: string;
	unmatch: string;
	match_mapping_type: string;
	path_match: string;
	path_unmatch: string;
	mapping: IProperty;
}
interface IProperty {
	Name: PropertyName;
	type: TypeName;
	index_name: string;
	store: boolean;
	doc_values: boolean;
	fields: KeyValuePair<PropertyName, IProperty>[];
	similarity: SimilarityOption;
	copy_to: Field[];
}
interface PropertyName {
	Name: string;
	Expression: Expression;
	Property: PropertyInfo;
}
interface IWarmer {
	types: TypeName[];
	source: ISearchRequest;
}
interface ISearchRequest {
	timeout: string;
	from: integer;
	size: integer;
	explain: boolean;
	version: boolean;
	track_scores: boolean;
	min_score: double;
	terminate_after: long;
	/** type has a custom json converter defined */ indices_boost: KeyValuePair<IndexName, double>[];
	sort: ISort[];
	suggest: KeyValuePair<string, ISuggestBucket>[];
	highlight: IHighlight;
	rescore: IRescore;
	fields: Field[];
	fielddata_fields: Field[];
	script_fields: KeyValuePair<string, IScriptField>[];
	/** type has a custom json converter defined */ _source: ISourceFilter;
	aggs: KeyValuePair<string, IAggregationContainer>[];
	query: /** type has a custom json converter defined */ QueryContainer;
	post_filter: /** type has a custom json converter defined */ QueryContainer;
	inner_hits: KeyValuePair<string, IInnerHitsContainer>[];
	Preference: string;
	Routing: string;
	SearchType: SearchType;
	IgnoreUnavalable: boolean;
	Index: Indices;
	Type: Types;
}
interface IndexName {
	Name: string;
	Type: Type;
}
interface ISort {
	SortKey: Field;
	missing: string;
	order: SortOrder;
	mode: SortMode;
	nested_filter: /** type has a custom json converter defined */ QueryContainer;
	nested_path: Field;
}
interface /** type has a custom json converter defined */ QueryContainer {
}
interface ISuggestBucket {
	text: string;
	term: ITermSuggester;
	phrase: IPhraseSuggester;
	completion: ICompletionSuggester;
}
interface ITermSuggester {
	prefix_len: integer;
	/** type has a custom json converter defined */ suggest_mode: SuggestMode;
	min_word_len: integer;
	max_edits: integer;
	max_inspections: integer;
	min_doc_freq: double;
	max_term_freq: double;
}
interface IPhraseSuggester {
	gram_size: integer;
	real_word_error_likelihood: double;
	confidence: double;
	max_errors: double;
	separator: string;
	direct_generator: IDirectGenerator[];
	highlight: IPhraseSuggestHighlight;
	collate: IPhraseSuggestCollate;
}
interface IDirectGenerator {
	field: Field;
	size: integer;
	prefix_len: integer;
	/** type has a custom json converter defined */ suggest_mode: SuggestMode;
	min_word_len: integer;
	max_edits: integer;
	max_inspections: double;
	min_doc_freq: double;
	max_term_freq: double;
	pre_filter: string;
	post_filter: string;
}
interface IPhraseSuggestHighlight {
	pre_tag: string;
	post_tag: string;
}
interface IPhraseSuggestCollate {
	query: IScript;
	prune: boolean;
}
interface IScript {
	/** type has a custom json converter defined */ params: KeyValuePair<string, any>[];
	lang: string;
}
interface ICompletionSuggester {
	fuzzy: IFuzzySuggester;
	context: KeyValuePair<string, any>[];
}
interface IFuzzySuggester {
	transpositions: boolean;
	min_length: integer;
	prefix_length: integer;
	fuzziness: IFuzziness;
	unicode_aware: boolean;
}
interface IFuzziness {
	Auto: boolean;
	EditDistance: integer;
	Ratio: double;
}
interface IHighlight {
	pre_tags: string[];
	post_tags: string[];
	fragment_size: integer;
	tags_schema: string;
	number_of_fragments: integer;
	fragment_offset: integer;
	boundary_max_size: integer;
	encoder: string;
	order: string;
	/** type has a custom json converter defined */ fields: KeyValuePair<Field, IHighlightField>[];
	require_field_match: boolean;
	boundary_chars: string;
}
interface IHighlightField {
	Field: Field;
	pre_tags: string[];
	post_tags: string[];
	fragment_size: integer;
	no_match_size: integer;
	number_of_fragments: integer;
	fragment_offset: integer;
	boundary_max_size: integer;
	encoder: string;
	order: string;
	tags_schema: string;
	require_field_match: boolean;
	boundary_chars: string;
	type: HighlighterType;
	force_source: boolean;
	matched_fields: Field[];
	highlight_query: /** type has a custom json converter defined */ QueryContainer;
}
interface IRescore {
	window_size: integer;
	query: IRescoreQuery;
}
interface IRescoreQuery {
	rescore_query: /** type has a custom json converter defined */ QueryContainer;
	query_weight: double;
	rescore_query_weight: double;
	score_mode: ScoreMode;
}
interface IScriptField {
	script: IScript;
}
interface ISourceFilter {
	include: Field[];
	exclude: Field[];
}
interface IAggregationContainer {
	/** type has a custom json converter defined */ meta: KeyValuePair<string, any>[];
	avg: IAverageAggregation;
	date_histogram: IDateHistogramAggregation;
	percentiles: IPercentilesAggregation;
	date_range: IDateRangeAggregation;
	extended_stats: IExtendedStatsAggregation;
	filter: IFilterAggregation;
	filters: IFiltersAggregation;
	geo_distance: IGeoDistanceAggregation;
	geohash_grid: IGeoHashGridAggregation;
	geo_bounds: IGeoBoundsAggregation;
	histogram: IHistogramAggregation;
	global: IGlobalAggregation;
	ip_range: IIpRangeAggregation;
	max: IMaxAggregation;
	min: IMinAggregation;
	cardinality: ICardinalityAggregation;
	missing: IMissingAggregation;
	nested: INestedAggregation;
	reverse_nested: IReverseNestedAggregation;
	range: IRangeAggregation;
	stats: IStatsAggregator;
	sum: ISumAggregation;
	terms: ITermsAggregation;
	significant_terms: ISignificantTermsAggregation;
	value_count: IValueCountAggregation;
	percentile_ranks: IPercentileRanksAggregation;
	top_hits: ITopHitsAggregation;
	children: IChildrenAggregation;
	scripted_metric: IScriptedMetricAggregation;
	avg_bucket: IAverageBucketAggregation;
	derivative: IDerivativeAggregation;
	max_bucket: IMaxBucketAggregation;
	min_bucket: IMinBucketAggregation;
	sum_bucket: ISumBucketAggregation;
	moving_avg: IMovingAverageAggregation;
	cumulative_sum: ICumulativeSumAggregation;
	serial_diff: ISerialDifferencingAggregation;
	bucket_script: IBucketScriptAggregation;
	bucket_selector: IBucketSelectorAggregation;
	sampler: ISamplerAggregation;
	aggs: KeyValuePair<string, IAggregationContainer>[];
}
interface IAverageAggregation {
}
interface IDateHistogramAggregation {
	field: Field;
	script: IScript;
	params: KeyValuePair<string, any>[];
	interval: Union<DateInterval, Time>;
	format: string;
	min_doc_count: integer;
	time_zone: string;
	factor: integer;
	offset: string;
	order: HistogramOrder;
	extended_bounds: ExtendedBounds<Date>;
	missing: Date;
}
interface Union<TFirst, TSecond> {
}
interface HistogramOrder {
	Key: string;
	Order: SortOrder;
	CountAscending: HistogramOrder;
	CountDescending: HistogramOrder;
	KeyAscending: HistogramOrder;
	KeyDescending: HistogramOrder;
}
interface ExtendedBounds<T> {
	min: T;
	max: T;
}
interface IPercentilesAggregation {
	Percents: double[];
	Method: IPercentilesMethod;
}
interface IPercentilesMethod {
}
interface IDateRangeAggregation {
	field: Field;
	format: string;
	ranges: IDateRangeExpression[];
}
interface IDateRangeExpression {
	from: /** type has a custom json converter defined */ DateMath;
	to: /** type has a custom json converter defined */ DateMath;
	key: string;
}
interface /** type has a custom json converter defined */ DateMath {
	Now: DateMathExpression;
}
interface DateMathExpression extends /** type has a custom json converter defined */ DateMath {
}
interface IExtendedStatsAggregation {
}
interface IFilterAggregation {
	filter: /** type has a custom json converter defined */ QueryContainer;
}
interface IFiltersAggregation {
	filters: Union<KeyValuePair<string, IQueryContainer>[], /** type has a custom json converter defined */ QueryContainer[]>;
	other_bucket: boolean;
	other_bucket_key: string;
}
interface IQueryContainer {
	IsConditionless: boolean;
	IsStrict: boolean;
	IsVerbatim: boolean;
	RawQuery: IRawQuery;
	bool: IBoolQuery;
	match_all: IMatchAllQuery;
	term: ITermQuery;
	wildcard: IWildcardQuery;
	prefix: IPrefixQuery;
	boosting: IBoostingQuery;
	ids: IIdsQuery;
	limit: ILimitQuery;
	constant_score: IConstantScoreQuery;
	dis_max: IDisMaxQuery;
	multi_match: IMultiMatchQuery;
	match: IMatchQuery;
	fuzzy: IFuzzyQuery;
	geo_shape: IGeoShapeQuery;
	common: ICommonTermsQuery;
	terms: ITermsQuery;
	range: IRangeQuery;
	regexp: IRegexpQuery;
	has_child: IHasChildQuery;
	has_parent: IHasParentQuery;
	span_term: ISpanTermQuery;
	simple_query_string: ISimpleQueryStringQuery;
	query_string: IQueryStringQuery;
	mlt: IMoreLikeThisQuery;
	span_first: ISpanFirstQuery;
	span_or: ISpanOrQuery;
	span_near: ISpanNearQuery;
	span_not: ISpanNotQuery;
	span_containing: ISpanContainingQuery;
	span_within: ISpanWithinQuery;
	span_multi: ISpanMultiTermQuery;
	nested: INestedQuery;
	indices: IIndicesQuery;
	function_score: IFunctionScoreQuery;
	template: ITemplateQuery;
	geo_bounding_box: IGeoBoundingBoxQuery;
	geo_distance: IGeoDistanceQuery;
	geo_polygon: IGeoPolygonQuery;
	geo_distance_range: IGeoDistanceRangeQuery;
	geohash_cell: IGeoHashCellQuery;
	script: IScriptQuery;
	exists: IExistsQuery;
	missing: IMissingQuery;
	type: ITypeQuery;
	filtered: IFilteredQuery;
	and: IAndQuery;
	or: IOrQuery;
	not: INotQuery;
}
interface IRawQuery {
	Raw: string;
}
interface IBoolQuery {
	must: /** type has a custom json converter defined */ QueryContainer[];
	must_not: /** type has a custom json converter defined */ QueryContainer[];
	should: /** type has a custom json converter defined */ QueryContainer[];
	filter: /** type has a custom json converter defined */ QueryContainer[];
	minimum_should_match: MinimumShouldMatch;
	disable_coord: boolean;
	Locked: boolean;
}
interface MinimumShouldMatch extends Union<integer, string> {
}
interface IMatchAllQuery {
	norm_field: string;
}
interface ITermQuery {
	value: any;
}
interface IWildcardQuery {
	/** type has a custom json converter defined */ rewrite: RewriteMultiTerm;
}
interface IPrefixQuery {
	/** type has a custom json converter defined */ rewrite: RewriteMultiTerm;
}
interface IBoostingQuery {
	positive: /** type has a custom json converter defined */ QueryContainer;
	negative: /** type has a custom json converter defined */ QueryContainer;
	negative_boost: double;
}
interface IIdsQuery {
	types: Types;
	values: Id[];
}
interface Types extends Union<AllTypesMarker, ManyTypes> {
	All: AllTypesMarker;
	AllTypes: AllTypesMarker;
}
interface Id {
}
interface ILimitQuery {
	limit: integer;
}
interface IConstantScoreQuery {
	filter: /** type has a custom json converter defined */ QueryContainer;
}
interface IDisMaxQuery {
	tie_breaker: double;
	queries: /** type has a custom json converter defined */ QueryContainer[];
}
interface IMultiMatchQuery {
	/** type has a custom json converter defined */ type: TextQueryType;
	query: string;
	analyzer: string;
	/** type has a custom json converter defined */ fuzzy_rewrite: RewriteMultiTerm;
	fuzziness: /** type has a custom json converter defined */ Fuzziness;
	cutoff_frequency: double;
	prefix_length: integer;
	max_expansions: integer;
	slop: integer;
	lenient: boolean;
	use_dis_max: boolean;
	tie_breaker: double;
	minimum_should_match: MinimumShouldMatch;
	operator: Operator;
	fields: Field[];
	zero_terms_query: ZeroTermsQuery;
}
interface /** type has a custom json converter defined */ Fuzziness {
	Auto: /** type has a custom json converter defined */ Fuzziness;
}
interface IMatchQuery {
	type: string;
	query: string;
	analyzer: string;
	/** type has a custom json converter defined */ fuzzy_rewrite: RewriteMultiTerm;
	fuzziness: IFuzziness;
	fuzzy_transpositions: boolean;
	cutoff_frequency: double;
	prefix_length: integer;
	max_expansions: integer;
	slop: integer;
	lenient: boolean;
	minimum_should_match: MinimumShouldMatch;
	operator: Operator;
	zero_terms_query: ZeroTermsQuery;
}
interface IFuzzyQuery {
	prefix_length: integer;
	rewrite: RewriteMultiTerm;
	max_expansions: integer;
	transpositions: boolean;
}
interface IGeoShapeQuery {
}
interface ICommonTermsQuery {
	query: string;
	cutoff_frequency: double;
	/** type has a custom json converter defined */ low_freq_operator: Operator;
	/** type has a custom json converter defined */ high_freq_operator: Operator;
	minimum_should_match: MinimumShouldMatch;
	analyzer: string;
	disable_coord: boolean;
}
interface ITermsQuery {
	MinimumShouldMatch: MinimumShouldMatch;
	DisableCoord: boolean;
	Terms: any[];
	TermsLookup: IFieldLookup;
}
interface IFieldLookup {
	index: IndexName;
	type: TypeName;
	id: Id;
	path: Field;
}
interface IRangeQuery {
}
interface IRegexpQuery {
	value: string;
	flags: string;
	max_determinized_states: integer;
}
interface IHasChildQuery {
	type: TypeName;
	score_mode: ChildScoreMode;
	min_children: integer;
	max_children: integer;
	query: /** type has a custom json converter defined */ QueryContainer;
	inner_hits: IInnerHits;
}
interface IInnerHits {
	name: string;
	from: integer;
	size: integer;
	sort: ISort[];
	highlight: IHighlight;
	explain: boolean;
	_source: ISourceFilter;
	version: boolean;
	fielddata_fields: Field[];
	script_fields: KeyValuePair<string, IScriptField>[];
}
interface IHasParentQuery {
	type: TypeName;
	score_mode: ParentScoreMode;
	query: /** type has a custom json converter defined */ QueryContainer;
	inner_hits: IInnerHits;
}
interface ISpanTermQuery {
}
interface ISimpleQueryStringQuery {
	fields: Field[];
	query: string;
	analyzer: string;
	default_operator: Operator;
	flags: SimpleQueryStringFlags;
	locale: string;
	lowercase_expanded_terms: boolean;
	lenient: boolean;
	analyze_wildcard: boolean;
	minimum_should_match: MinimumShouldMatch;
}
interface IQueryStringQuery {
	query: string;
	default_field: Field;
	default_operator: Operator;
	analyzer: string;
	quote_analyzer: string;
	allow_leading_wildcard: boolean;
	lowercase_expanded_terms: boolean;
	enable_position_increments: boolean;
	fuzzy_max_expansions: integer;
	fuziness: /** type has a custom json converter defined */ Fuzziness;
	fuzzy_prefix_length: integer;
	phrase_slop: double;
	analyze_wildcard: boolean;
	auto_generate_phrase_queries: boolean;
	max_determinized_states: integer;
	minimum_should_match: MinimumShouldMatch;
	lenient: boolean;
	locale: string;
	time_zone: string;
	fields: Field[];
	use_dis_max: boolean;
	tie_breaker: double;
	rewrite: RewriteMultiTerm;
	fuzzy_rewrite: RewriteMultiTerm;
	quote_field_suffix: string;
	escape: boolean;
}
interface IMoreLikeThisQuery {
	fields: Field[];
	like: Like[];
	unlike: Like[];
	max_query_terms: integer;
	min_term_freq: integer;
	min_doc_freq: integer;
	max_doc_freq: integer;
	min_word_len: integer;
	max_word_len: integer;
	stop_words: StopWords;
	analyzer: string;
	minimum_should_match: MinimumShouldMatch;
	boost_terms: double;
	include: boolean;
}
interface Like extends Union<string, ILikeDocument> {
}
interface ILikeDocument {
	_index: IndexName;
	_type: TypeName;
	_id: Id;
	fields: Field[];
	_routing: string;
	doc: any;
	per_field_analyzer: KeyValuePair<Field, string>[];
	ClrType: Type;
	CanBeFlattened: boolean;
}
interface StopWords extends Union<string, string[]> {
}
interface ISpanFirstQuery {
	match: ISpanQuery;
	end: integer;
}
interface ISpanQuery {
	span_term: ISpanTermQuery;
	span_first: ISpanFirstQuery;
	span_near: ISpanNearQuery;
	span_or: ISpanOrQuery;
	span_not: ISpanNotQuery;
	span_containing: ISpanContainingQuery;
	span_within: ISpanWithinQuery;
	span_multi: ISpanMultiTermQuery;
}
interface ISpanNearQuery {
	clauses: ISpanQuery[];
	slop: integer;
	in_order: boolean;
	collect_payloads: boolean;
}
interface ISpanOrQuery {
	clauses: ISpanQuery[];
}
interface ISpanNotQuery {
	include: ISpanQuery;
	exclude: ISpanQuery;
	pre: integer;
	post: integer;
	dist: integer;
}
interface ISpanContainingQuery {
	little: ISpanQuery;
	big: ISpanQuery;
}
interface ISpanWithinQuery {
	little: ISpanQuery;
	big: ISpanQuery;
}
interface ISpanMultiTermQuery {
	match: /** type has a custom json converter defined */ QueryContainer;
}
interface INestedQuery {
	score_mode: NestedScoreMode;
	query: /** type has a custom json converter defined */ QueryContainer;
	path: Field;
	inner_hits: IInnerHits;
}
interface IIndicesQuery {
	/** type has a custom json converter defined */ indices: Indices;
	query: /** type has a custom json converter defined */ QueryContainer;
	/** type has a custom json converter defined */ no_match_query: /** type has a custom json converter defined */ QueryContainer;
}
interface Indices extends Union<AllIndicesMarker, ManyIndices> {
	All: Indices;
	AllIndices: Indices;
}
interface IFunctionScoreQuery {
	query: /** type has a custom json converter defined */ QueryContainer;
	functions: IScoreFunction[];
	max_boost: double;
	score_mode: FunctionScoreMode;
	boost_mode: FunctionBoostMode;
	min_score: double;
}
interface IScoreFunction {
	filter: /** type has a custom json converter defined */ QueryContainer;
	weight: double;
}
interface ITemplateQuery {
	file: string;
	inline: string;
	id: Id;
	params: KeyValuePair<string, any>[];
}
interface IGeoBoundingBoxQuery {
	BoundingBox: IBoundingBox;
	type: GeoExecution;
	coerce: boolean;
	ignore_malformed: boolean;
	validation_method: GeoValidationMethod;
}
interface IBoundingBox {
	top_left: GeoLocation;
	bottom_right: GeoLocation;
}
interface GeoLocation {
	lat: double;
	lon: double;
}
interface IGeoDistanceQuery {
	Location: GeoLocation;
	distance: Distance;
	optimize_bbox: GeoOptimizeBBox;
	distance_type: GeoDistanceType;
	coerce: boolean;
	ignore_malformed: boolean;
	validation_method: GeoValidationMethod;
}
interface Distance {
	Precision: double;
	Unit: DistanceUnit;
}
interface IGeoPolygonQuery {
	Points: GeoLocation[];
	coerce: boolean;
	ignore_malformed: boolean;
	validation_method: GeoValidationMethod;
}
interface IGeoDistanceRangeQuery {
	Location: GeoLocation;
	gte: Distance;
	lte: Distance;
	gt: Distance;
	lt: Distance;
	distance_type: GeoDistanceType;
	optimize_bbox: GeoOptimizeBBox;
	coerce: boolean;
	ignore_malformed: boolean;
	validation_method: GeoValidationMethod;
}
interface IGeoHashCellQuery {
	Location: GeoLocation;
	precision: Union<integer, Distance>;
	neighbors: boolean;
}
interface IScriptQuery {
	inline: string;
	id: Id;
	file: string;
	/** type has a custom json converter defined */ params: KeyValuePair<string, any>[];
	lang: string;
}
interface IExistsQuery {
	field: Field;
}
interface IMissingQuery {
	field: Field;
	existence: boolean;
	null_value: boolean;
}
interface ITypeQuery {
	value: TypeName;
}
interface IFilteredQuery {
	query: /** type has a custom json converter defined */ QueryContainer;
	filter: /** type has a custom json converter defined */ QueryContainer;
}
interface IAndQuery {
	filters: /** type has a custom json converter defined */ QueryContainer[];
}
interface IOrQuery {
	filters: /** type has a custom json converter defined */ QueryContainer[];
}
interface INotQuery {
	filters: /** type has a custom json converter defined */ QueryContainer[];
}
interface IGeoDistanceAggregation {
	field: Field;
	origin: GeoLocation;
	unit: DistanceUnit;
	distance_type: GeoDistanceType;
	ranges: IRange[];
}
interface IRange {
	from: double;
	to: double;
	key: string;
}
interface IGeoHashGridAggregation {
	field: Field;
	size: integer;
	shard_size: integer;
	precision: GeoHashPrecision;
}
interface IGeoBoundsAggregation {
	wrap_longitude: boolean;
}
interface IHistogramAggregation {
	field: Field;
	script: IScript;
	interval: double;
	min_doc_count: integer;
	order: HistogramOrder;
	extended_bounds: ExtendedBounds<double>;
	pre_offset: long;
	post_offset: long;
	missing: double;
}
interface IGlobalAggregation {
}
interface IIpRangeAggregation {
	field: Field;
	ranges: IIpRange[];
}
interface IIpRange {
	from: string;
	to: string;
	mask: string;
}
interface IMaxAggregation {
}
interface IMinAggregation {
}
interface ICardinalityAggregation {
	precision_threshold: integer;
	rehash: boolean;
}
interface IMissingAggregation {
	field: Field;
}
interface INestedAggregation {
	path: Field;
}
interface IReverseNestedAggregation {
	path: Field;
}
interface IRangeAggregation {
	field: Field;
	script: IScript;
	ranges: IRange[];
}
interface IStatsAggregator {
}
interface ISumAggregation {
}
interface ITermsAggregation {
	field: Field;
	script: IScript;
	size: integer;
	shard_size: integer;
	min_doc_count: integer;
	execution_hint: TermsAggregationExecutionHint;
	order: TermsOrder[];
	include: TermsIncludeExclude;
	exclude: TermsIncludeExclude;
	collect_mode: TermsAggregationCollectMode;
	show_term_doc_error_count: boolean;
	missing: string;
}
interface TermsOrder {
	Key: string;
	Order: SortOrder;
	CountAscending: TermsOrder;
	CountDescending: TermsOrder;
	TermAscending: TermsOrder;
	TermDescending: TermsOrder;
}
interface TermsIncludeExclude {
	pattern: string;
	flags: string;
	Values: string[];
}
interface ISignificantTermsAggregation {
	field: Field;
	size: integer;
	shard_size: integer;
	min_doc_count: integer;
	execution_hint: TermsAggregationExecutionHint;
	include: KeyValuePair<string, string>[];
	exclude: KeyValuePair<string, string>[];
	mutual_information: IMutualInformationHeuristic;
	chi_square: IChiSquareHeuristic;
	gnd: IGoogleNormalizedDistanceHeuristic;
	percentage: IPercentageScoreHeuristic;
	script_heuristic: IScriptedHeuristic;
	background_filter: /** type has a custom json converter defined */ QueryContainer;
}
interface IMutualInformationHeuristic {
	include_negatives: boolean;
	background_is_superset: boolean;
}
interface IChiSquareHeuristic {
	include_negatives: boolean;
	background_is_superset: boolean;
}
interface IGoogleNormalizedDistanceHeuristic {
	background_is_superset: boolean;
}
interface IPercentageScoreHeuristic {
}
interface IScriptedHeuristic {
	script: IScript;
}
interface IValueCountAggregation {
}
interface IPercentileRanksAggregation {
	Values: double[];
	Method: IPercentilesMethod;
}
interface ITopHitsAggregation {
	from: integer;
	size: integer;
	sort: ISort[];
	_source: ISourceFilter;
	highlight: IHighlight;
	explain: boolean;
	/** type has a custom json converter defined */ script_fields: KeyValuePair<string, IScriptField>[];
	fielddata_fields: Field[];
	version: boolean;
}
interface IChildrenAggregation {
	type: TypeName;
}
interface IScriptedMetricAggregation {
	init_script: IScript;
	map_script: IScript;
	combine_script: IScript;
	reduce_script: IScript;
	params: KeyValuePair<string, any>[];
}
interface IAverageBucketAggregation {
}
interface IDerivativeAggregation {
}
interface IMaxBucketAggregation {
}
interface IMinBucketAggregation {
}
interface ISumBucketAggregation {
}
interface IMovingAverageAggregation {
	Model: IMovingAverageModel;
	window: integer;
	minimize: boolean;
	predict: integer;
}
interface IMovingAverageModel {
	Name: string;
}
interface ICumulativeSumAggregation {
}
interface ISerialDifferencingAggregation {
	lag: integer;
}
interface IBucketScriptAggregation {
	script: IScript;
}
interface IBucketSelectorAggregation {
	script: IScript;
}
interface ISamplerAggregation {
	shard_size: integer;
	field: Field;
	max_docs_per_value: integer;
	script: IScript;
	execution_hint: SamplerAggregationExecutionHint;
}
interface IInnerHitsContainer {
	type: KeyValuePair<TypeName, IGlobalInnerHit>[];
	path: KeyValuePair<Field, IGlobalInnerHit>[];
}
interface IGlobalInnerHit {
	query: /** type has a custom json converter defined */ QueryContainer;
	inner_hits: KeyValuePair<string, IInnerHitsContainer>[];
}
interface IAlias {
	filter: /** type has a custom json converter defined */ QueryContainer;
	routing: string;
	index_routing: string;
	search_routing: string;
}
interface MetadataIndexState {
	state: string;
	/** type has a custom json converter defined */ settings: string[];
	mappings: KeyValuePair<TypeName, ITypeMapping>[];
	aliases: string[];
}
interface ClusterStatsRequest extends RequestBase<ClusterStatsRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ FlatSettings: boolean;
	/** mapped on body but might only proxy to request querystring */ Human: boolean;
	/** mapped on body but might only proxy to request querystring */ Timeout: Time;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface ClusterStatsResponse extends ResponseBase {
	cluster_name: string;
	timestamp: long;
	status: ClusterStatus;
	indices: ClusterIndicesStats;
	nodes: ClusterNodesStats;
}
interface ClusterIndicesStats {
	completion: CompletionStats;
	count: long;
	docs: DocStats;
	fielddata: FielddataStats;
	percolate: PercolateStats;
	query_cache: QueryCacheStats;
	segments: SegmentsStats;
	shards: ClusterIndicesShardsStats;
	store: StoreStats;
}
interface CompletionStats {
	size: string;
	size_in_bytes: long;
}
interface DocStats {
	count: long;
	deleted: long;
}
interface FielddataStats {
	evictions: long;
	memory_size: string;
	memory_size_in_bytes: long;
}
interface PercolateStats {
	total: long;
	time: string;
	time_in_millis: long;
	current: long;
	memory_size: string;
	memory_size_in_bytes: long;
	queries: long;
}
interface QueryCacheStats {
	memory_size: string;
	memory_size_in_bytes: long;
	total_count: long;
	hit_count: long;
	miss_count: long;
	cache_size: long;
	cache_count: long;
	evictions: long;
}
interface SegmentsStats {
	count: long;
	doc_values_memory: string;
	doc_values_memory_in_bytes: long;
	fixed_bit_set_memory: string;
	fixed_bit_set_memory_in_bytes: long;
	index_writer_max_memory: string;
	index_writer_max_memory_in_bytes: long;
	index_writer_memory: string;
	index_writer_memory_in_bytes: long;
	memory: string;
	memory_in_bytes: long;
	norms_memory: string;
	norms_memory_in_bytes: long;
	stored_fields_memory: string;
	stored_fields_memory_in_bytes: long;
	term_vectors_memory: string;
	term_vectors_memory_in_bytes: long;
	terms_memory: string;
	terms_memory_in_bytes: long;
	version_map_memory: string;
	version_map_memory_in_bytes: long;
}
interface ClusterIndicesShardsStats {
	total: double;
	primaries: double;
	replication: double;
	index: ClusterIndicesShardsIndexStats;
}
interface ClusterIndicesShardsIndexStats {
	shards: ClusterShardMetrics;
	primaries: ClusterShardMetrics;
	replication: ClusterShardMetrics;
}
interface ClusterShardMetrics {
	min: double;
	max: double;
	avg: double;
}
interface StoreStats {
	size: string;
	size_in_bytes: double;
	throttle_time: string;
	throttle_time_in_millis: long;
}
interface ClusterNodesStats {
	count: ClusterNodeCount;
	versions: string[];
	os: ClusterOperatingSystemStats;
	process: ClusterProcess;
	jvm: ClusterJvm;
	fs: ClusterFileSystem;
	plugins: PluginStats[];
}
interface ClusterNodeCount {
	total: integer;
	master_only: integer;
	data_only: integer;
	master_data: integer;
	client: integer;
}
interface ClusterOperatingSystemStats {
	available_processors: integer;
	mem: ClusterOperatingSystemMemory;
	names: ClusterOperatingSystemName[];
}
interface ClusterOperatingSystemMemory {
	total: string;
	total_in_bytes: long;
}
interface ClusterOperatingSystemName {
	count: integer;
	name: string;
}
interface ClusterProcess {
	cpu: ClusterProcessCpu;
	open_file_descriptors: ClusterProcessOpenFileDescriptors;
}
interface ClusterProcessCpu {
	percent: integer;
}
interface ClusterProcessOpenFileDescriptors {
	min: long;
	max: long;
	avg: long;
}
interface ClusterJvm {
	max_uptime: string;
	max_uptime_in_millis: long;
	versions: ClusterJvmVersion[];
	mem: ClusterJvmMemory;
	threads: long;
}
interface ClusterJvmVersion {
	version: string;
	vm_name: string;
	vm_version: string;
	vm_vendor: string;
	count: integer;
}
interface ClusterJvmMemory {
	heap_used: string;
	heap_used_in_bytes: long;
	heap_max: string;
	heap_max_in_bytes: long;
}
interface ClusterFileSystem {
	total: string;
	total_in_bytes: long;
	free: string;
	free_in_bytes: long;
	available: string;
	available_in_bytes: long;
}
interface PluginStats {
	name: string;
	version: string;
	description: string;
	classname: string;
	jvm: boolean;
	isolated: boolean;
	site: boolean;
}
interface NodesHotThreadsRequest extends RequestBase<NodesHotThreadsRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Interval: Time;
	/** mapped on body but might only proxy to request querystring */ Snapshots: long;
	/** mapped on body but might only proxy to request querystring */ Threads: long;
	/** mapped on body but might only proxy to request querystring */ IgnoreIdleThreads: boolean;
	/** mapped on body but might only proxy to request querystring */ ThreadType: ThreadType;
	/** mapped on body but might only proxy to request querystring */ Timeout: Time;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface NodesHotThreadsResponse extends ResponseBase {
	HotThreads: HotThreadInformation[];
}
interface HotThreadInformation {
	NodeName: string;
	NodeId: string;
	Threads: string[];
	Hosts: string[];
}
interface NodesInfoRequest extends RequestBase<NodesInfoRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ FlatSettings: boolean;
	/** mapped on body but might only proxy to request querystring */ Human: boolean;
	/** mapped on body but might only proxy to request querystring */ Timeout: Time;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface NodesInfoResponse extends ResponseBase {
	cluster_name: string;
	/** type has a custom json converter defined */ nodes: KeyValuePair<string, NodeInfo>[];
}
interface NodeInfo {
	name: string;
	transport_address: string;
	host: string;
	ip: string;
	version: string;
	build: string;
	http_address: string;
	/** type has a custom json converter defined */ settings: string[];
	os: NodeOperatingSystemInfo;
	process: NodeProcessInfo;
	jvm: NodeJvmInfo;
	/** type has a custom json converter defined */ thread_pool: KeyValuePair<string, NodeThreadPoolInfo>[];
	network: NodeInfoNetwork;
	transport: NodeInfoTransport;
	http: NodeInfoHttp;
	plugins: PluginStats[];
}
interface NodeOperatingSystemInfo {
	name: string;
	arch: string;
	version: string;
	refresh_interval_in_millis: integer;
	available_processors: integer;
	cpu: NodeInfoOSCPU;
	mem: NodeInfoMemory;
	swap: NodeInfoMemory;
}
interface NodeInfoOSCPU {
	vendor: string;
	model: string;
	mhz: integer;
	total_cores: integer;
	total_sockets: integer;
	cores_per_socket: integer;
	cache_size: string;
	cache_size_in_bytes: integer;
}
interface NodeInfoMemory {
	total: string;
	total_in_bytes: long;
}
interface NodeProcessInfo {
	refresh_interval: string;
	refresh_interval_in_millis: long;
	id: long;
}
interface NodeJvmInfo {
	pid: integer;
	version: string;
	vm_name: string;
	vm_version: string;
	vm_vendor: string;
	memory_pools: string[];
	gc_collectors: string[];
	start_time_in_millis: long;
	mem: NodeInfoJVMMemory;
}
interface NodeInfoJVMMemory {
	heap_init: string;
	heap_init_in_bytes: long;
	heap_max: string;
	heap_max_in_bytes: long;
	non_heap_init: string;
	non_heap_init_in_bytes: long;
	non_heap_max: string;
	non_heap_max_in_bytes: long;
	direct_max: string;
	direct_max_in_bytes: long;
}
interface NodeThreadPoolInfo {
	type: string;
	min: integer;
	max: integer;
	queue_size: integer;
	keep_alive: string;
}
interface NodeInfoNetwork {
	refresh_interval: integer;
	primary_interface: NodeInfoNetworkInterface;
}
interface NodeInfoNetworkInterface {
	address: string;
	name: string;
	mac_address: string;
}
interface NodeInfoTransport {
	bound_address: string[];
	publish_address: string;
}
interface NodeInfoHttp {
	bound_address: string[];
	publish_address: string;
	max_content_length: string;
	max_content_length_in_bytes: long;
}
interface NodesStatsRequest extends RequestBase<NodesStatsRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ CompletionFields: Field[];
	/** mapped on body but might only proxy to request querystring */ FielddataFields: Field[];
	/** mapped on body but might only proxy to request querystring */ Fields: Field[];
	/** mapped on body but might only proxy to request querystring */ Groups: boolean;
	/** mapped on body but might only proxy to request querystring */ Human: boolean;
	/** mapped on body but might only proxy to request querystring */ Level: Level;
	/** mapped on body but might only proxy to request querystring */ Types: string[];
	/** mapped on body but might only proxy to request querystring */ Timeout: Time;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface NodesStatsResponse extends ResponseBase {
	cluster_name: string;
	/** type has a custom json converter defined */ nodes: KeyValuePair<string, NodeStats>[];
}
interface NodeStats {
	timestamp: long;
	name: string;
	transport_address: string;
	host: string;
	ip: string[];
	indices: IndexStats;
	os: OperatingSystemStats;
	process: ProcessStats;
	script: ScriptStats;
	jvm: NodeJvmStats;
	/** type has a custom json converter defined */ thread_pool: KeyValuePair<string, ThreadCountStats>[];
	/** type has a custom json converter defined */ breakers: KeyValuePair<string, BreakerStats>[];
	fs: FileSystemStats;
	transport: TransportStats;
	http: HttpStats;
}
interface IndexStats {
	docs: DocStats;
	store: StoreStats;
	indexing: IndexingStats;
	get: GetStats;
	search: SearchStats;
	merges: MergesStats;
	refresh: RefreshStats;
	flush: FlushStats;
	warmer: WarmerStats;
	query_cache: QueryCacheStats;
	fielddata: FielddataStats;
	percolate: PercolateStats;
	completion: CompletionStats;
	segments: SegmentsStats;
	translog: TranslogStats;
	suggest: SuggestStats;
	request_cache: RequestCacheStats;
	recovery: RecoveryStats;
}
interface IndexingStats {
	delete_current: long;
	delete_time: string;
	delete_time_in_millis: long;
	delete_total: long;
	index_current: long;
	index_time: string;
	index_time_in_millis: long;
	index_total: long;
	is_throttled: boolean;
	noop_update_total: long;
	throttle_time: string;
	throttle_time_in_millis: long;
	/** type has a custom json converter defined */ types: KeyValuePair<string, IndexingStats>[];
}
interface GetStats {
	current: long;
	exists_time: string;
	exists_time_in_millis: long;
	exists_total: long;
	missing_time: string;
	missing_time_in_millis: long;
	missing_total: long;
	time: string;
	time_in_millis: long;
	total: long;
}
interface SearchStats {
	fetch_current: long;
	fetch_time: string;
	fetch_time_in_millis: long;
	fetch_total: long;
	query_current: long;
	query_time: string;
	query_time_in_millis: long;
	query_total: long;
	scroll_current: long;
	scroll_time: string;
	scroll_time_in_millis: long;
	scroll_total: long;
}
interface MergesStats {
	current: long;
	current_docs: long;
	current_size: string;
	current_size_in_bytes: long;
	total: long;
	total_auto_throttle: string;
	total_auto_throttle_in_bytes: long;
	total_docs: long;
	total_size: string;
	total_size_in_bytes: string;
	total_stopped_time: string;
	total__stopped_time_in_millis: long;
	total_throttled_time: string;
	total_throttled_time_in_millis: long;
	total_time: string;
	total_time_in_millis: long;
}
interface RefreshStats {
	total: long;
	total_time: string;
	total_time_in_millis: long;
}
interface FlushStats {
	total: long;
	total_time: string;
	total_time_in_millis: long;
}
interface WarmerStats {
	current: long;
	total: long;
	total_time: string;
	total_time_in_millis: long;
}
interface TranslogStats {
	operations: long;
	size: string;
	size_in_bytes: long;
}
interface SuggestStats {
	current: long;
	total: long;
	total_time: string;
	total_time_in_millis: long;
}
interface RequestCacheStats {
	evictions: long;
	hit_count: long;
	memory_size: string;
	memory_size_in_bytes: long;
	miss_count: long;
}
interface RecoveryStats {
	current_as_source: long;
	current_as_target: long;
	throttle_time: string;
	throttle_time_in_millis: long;
}
interface OperatingSystemStats {
	timestamp: long;
	load_average: float;
	mem: ExtendedMemoryStats;
	swap: MemoryStats;
}
interface ProcessStats {
	timestamp: long;
	open_file_descriptors: integer;
	cpu: CPUStats;
	mem: MemoryStats;
}
interface ScriptStats {
	cache_evictions: long;
	compilations: long;
}
interface NodeJvmStats {
	timestamp: long;
	uptime: string;
	uptime_in_millis: long;
	mem: MemoryStats;
	threads: ThreadStats;
	gc: GarbageCollectionStats;
	/** type has a custom json converter defined */ buffer_pools: KeyValuePair<string, NodeBufferPool>[];
	classes: JvmClassesStats;
}
interface ThreadCountStats {
	threads: long;
	queue: long;
	active: long;
	rejected: long;
	largest: long;
	completed: long;
}
interface BreakerStats {
	estimated_size: string;
	estimated_size_in_bytes: long;
	limit_size: string;
	limit_size_in_bytes: long;
	overhead: float;
	tripped: float;
}
interface FileSystemStats {
	timestamp: long;
	total: TotalFileSystemStats;
	data: DataPathStats[];
}
interface TransportStats {
	server_open: integer;
	rx_count: long;
	rx_size: string;
	rx_size_in_bytes: long;
	tx_count: long;
	tx_size: string;
	tx_size_in_bytes: long;
}
interface HttpStats {
	current_open: integer;
	total_opened: long;
}
interface PingRequest extends RequestBase<PingRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface PingResponse extends ResponseBase {
}
interface RootNodeInfoRequest extends RequestBase<RootNodeInfoRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface RootNodeInfoResponse extends ResponseBase {
	name: string;
	tagline: string;
	version: ElasticsearchVersionInfo;
}
interface ElasticsearchVersionInfo {
	Number: string;
	snapshot_build: boolean;
	lucene_version: string;
}
interface RequestDescriptorBase<TDescriptor, TParameters, TInterface> extends RequestBase<TParameters> {
}
interface AcknowledgedResponseBase extends ResponseBase {
	acknowledged: boolean;
}
interface DictionaryResponseBase<TKey, TValue> extends ResponseBase {
}
interface IndicesResponseBase extends ResponseBase {
	acknowledged: boolean;
	_shards: ShardsMetaData;
}
interface ShardsMetaData {
	Total: integer;
	Successful: integer;
	Failed: integer;
	failures: ShardFailure[];
}
interface ShardFailure {
	index: string;
	shard: integer;
	node: string;
	reason: ShardFailureReason;
}
interface ShardFailureReason {
	Type: string;
	Reason: string;
	caused_by: CausedBy;
}
interface CausedBy {
	Type: string;
	Reason: string;
}
interface ShardsOperationResponseBase extends ResponseBase {
	_shards: ShardsMetaData;
}
interface /** type has a custom json converter defined */ BulkRequest extends RequestBase<BulkRequestParameters> {
	Operations: IBulkOperation[];
	/** mapped on body but might only proxy to request querystring */ Consistency: Consistency;
	/** mapped on body but might only proxy to request querystring */ Refresh: boolean;
	/** mapped on body but might only proxy to request querystring */ Routing: string;
	/** mapped on body but might only proxy to request querystring */ Timeout: Time;
	/** mapped on body but might only proxy to request querystring */ Fields: Field[];
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface IBulkOperation {
	Operation: string;
	ClrType: Type;
	_index: IndexName;
	_type: TypeName;
	_id: Id;
	_version: long;
	/** type has a custom json converter defined */ _version_type: VersionType;
	_routing: string;
	_parent: Id;
	_timestamp: long;
	_ttl: Time;
	_retry_on_conflict: integer;
}
interface BulkResponse extends ResponseBase {
	IsValid: boolean;
	took: integer;
	errors: boolean;
	items: BulkResponseItemBase[];
	ItemsWithErrors: BulkResponseItemBase[];
}
interface BulkResponseItemBase {
	Operation: string;
	_index: string;
	_type: string;
	_id: string;
	_version: long;
	status: integer;
	error: BulkError;
	_shards: ShardsMetaData;
	IsValid: boolean;
}
interface BulkError {
	index: string;
	shard: integer;
	type: string;
	reason: string;
}
interface DeleteByQueryRequest extends RequestBase<DeleteByQueryRequestParameters> {
	query: /** type has a custom json converter defined */ QueryContainer;
	/** mapped on body but might only proxy to request querystring */ Analyzer: string;
	/** mapped on body but might only proxy to request querystring */ DefaultOperator: DefaultOperator;
	/** mapped on body but might only proxy to request querystring */ Df: string;
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ QueryOnQueryString: string;
	/** mapped on body but might only proxy to request querystring */ Routing: string;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ Timeout: Time;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface DeleteByQueryRequest<T> extends RequestBase<DeleteByQueryRequestParameters> {
	Query: /** type has a custom json converter defined */ QueryContainer;
	Analyzer: string;
	DefaultOperator: DefaultOperator;
	Df: string;
	IgnoreUnavailable: boolean;
	AllowNoIndices: boolean;
	ExpandWildcards: ExpandWildcards;
	QueryOnQueryString: string;
	Routing: string;
	Source: string;
	Timeout: Time;
	FilterPath: string;
}
interface DeleteByQueryDescriptor<T> extends RequestDescriptorBase<DeleteByQueryDescriptor<T>, DeleteByQueryRequestParameters, IDeleteByQueryRequest> {
}
interface DeleteByQueryResponse extends ResponseBase {
	/** type has a custom json converter defined */ _indices: KeyValuePair<string, DeleteByQueryIndicesResult>[];
	took: long;
	timed_out: boolean;
}
interface DeleteByQueryIndicesResult {
	found: long;
	deleted: long;
	missing: long;
	failed: long;
}
interface /** type has a custom json converter defined */ MultiGetRequest extends RequestBase<MultiGetRequestParameters> {
	docs: IMultiGetOperation[];
	/** mapped on body but might only proxy to request querystring */ Fields: Field[];
	/** mapped on body but might only proxy to request querystring */ Preference: string;
	/** mapped on body but might only proxy to request querystring */ Realtime: boolean;
	/** mapped on body but might only proxy to request querystring */ Refresh: boolean;
	/** mapped on body but might only proxy to request querystring */ SourceEnabled: string[];
	/** mapped on body but might only proxy to request querystring */ SourceExclude: Field[];
	/** mapped on body but might only proxy to request querystring */ SourceInclude: Field[];
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface IMultiGetOperation {
	_index: IndexName;
	_type: TypeName;
	_id: Id;
	fields: Field[];
	_routing: string;
	_source: Union<boolean, ISourceFilter>;
	ClrType: Type;
	CanBeFlattened: boolean;
}
interface MultiGetResponse extends ResponseBase {
	Documents: IMultiGetHit<any>[];
}
interface IMultiGetHit<T> {
	Source: T;
	Index: string;
	Found: boolean;
	Type: string;
	Version: long;
	Id: string;
}
interface MultiTermVectorsRequest extends RequestBase<MultiTermVectorsRequestParameters> {
	docs: IMultiTermVectorOperation[];
	/** mapped on body but might only proxy to request querystring */ TermStatistics: boolean;
	/** mapped on body but might only proxy to request querystring */ FieldStatistics: boolean;
	/** mapped on body but might only proxy to request querystring */ Fields: Field[];
	/** mapped on body but might only proxy to request querystring */ Offsets: boolean;
	/** mapped on body but might only proxy to request querystring */ Positions: boolean;
	/** mapped on body but might only proxy to request querystring */ Payloads: boolean;
	/** mapped on body but might only proxy to request querystring */ Preference: string;
	/** mapped on body but might only proxy to request querystring */ Routing: string;
	/** mapped on body but might only proxy to request querystring */ Parent: string;
	/** mapped on body but might only proxy to request querystring */ Realtime: boolean;
	/** mapped on body but might only proxy to request querystring */ Version: long;
	/** mapped on body but might only proxy to request querystring */ VersionType: VersionType;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface IMultiTermVectorOperation {
	_index: IndexName;
	_type: TypeName;
	_id: Id;
	doc: any;
	fields: Field[];
	offsets: boolean;
	payloads: boolean;
	positions: boolean;
	term_statistics: boolean;
	field_statistics: boolean;
}
interface MultiTermVectorsResponse extends ResponseBase {
	docs: TermVectorsResponse[];
}
interface TermVectorsResponse extends ResponseBase {
	found: boolean;
	term_vectors: KeyValuePair<string, TermVector>[];
}
interface TermVector {
	field_statistics: FieldStatistics;
	terms: KeyValuePair<string, TermVectorTerm>[];
}
interface FieldStatistics {
	doc_count: integer;
	sum_doc_freq: integer;
	sum_ttf: integer;
}
interface TermVectorTerm {
	doc_freq: integer;
	term_freq: integer;
	tokens: Token[];
	ttf: integer;
}
interface Token {
	end_offset: integer;
	payload: string;
	position: integer;
	start_offset: integer;
}
interface DeleteRequest extends RequestBase<DeleteRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Consistency: Consistency;
	/** mapped on body but might only proxy to request querystring */ Parent: string;
	/** mapped on body but might only proxy to request querystring */ Refresh: boolean;
	/** mapped on body but might only proxy to request querystring */ Routing: string;
	/** mapped on body but might only proxy to request querystring */ Timeout: Time;
	/** mapped on body but might only proxy to request querystring */ Version: long;
	/** mapped on body but might only proxy to request querystring */ VersionType: VersionType;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface DeleteRequest<T> extends RequestBase<DeleteRequestParameters> {
	Consistency: Consistency;
	Parent: string;
	Refresh: boolean;
	Routing: string;
	Timeout: Time;
	Version: long;
	VersionType: VersionType;
	Source: string;
	FilterPath: string;
}
interface DeleteDescriptor<T> extends RequestDescriptorBase<DeleteDescriptor<T>, DeleteRequestParameters, IDeleteRequest> {
}
interface DeleteResponse extends ResponseBase {
	_index: string;
	_type: string;
	_id: string;
	_version: string;
	found: boolean;
}
interface DocumentExistsRequest extends RequestBase<DocumentExistsRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Parent: string;
	/** mapped on body but might only proxy to request querystring */ Preference: string;
	/** mapped on body but might only proxy to request querystring */ Realtime: boolean;
	/** mapped on body but might only proxy to request querystring */ Refresh: boolean;
	/** mapped on body but might only proxy to request querystring */ Routing: string;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface DocumentExistsRequest<T> extends RequestBase<DocumentExistsRequestParameters> {
	Parent: string;
	Preference: string;
	Realtime: boolean;
	Refresh: boolean;
	Routing: string;
	Source: string;
	FilterPath: string;
}
interface DocumentExistsDescriptor<T> extends RequestDescriptorBase<DocumentExistsDescriptor<T>, DocumentExistsRequestParameters, IDocumentExistsRequest> {
}
interface GetRequest extends RequestBase<GetRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Fields: Field[];
	/** mapped on body but might only proxy to request querystring */ Parent: string;
	/** mapped on body but might only proxy to request querystring */ Preference: string;
	/** mapped on body but might only proxy to request querystring */ Realtime: boolean;
	/** mapped on body but might only proxy to request querystring */ Refresh: boolean;
	/** mapped on body but might only proxy to request querystring */ Routing: string;
	/** mapped on body but might only proxy to request querystring */ SourceEnabled: string[];
	/** mapped on body but might only proxy to request querystring */ SourceExclude: Field[];
	/** mapped on body but might only proxy to request querystring */ SourceInclude: Field[];
	/** mapped on body but might only proxy to request querystring */ Version: long;
	/** mapped on body but might only proxy to request querystring */ VersionType: VersionType;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface GetRequest<T> extends RequestBase<GetRequestParameters> {
	Fields: Field[];
	Parent: string;
	Preference: string;
	Realtime: boolean;
	Refresh: boolean;
	Routing: string;
	SourceEnabled: string[];
	SourceExclude: Field[];
	SourceInclude: Field[];
	Version: long;
	VersionType: VersionType;
	Source: string;
	FilterPath: string;
}
interface GetDescriptor<T> extends RequestDescriptorBase<GetDescriptor<T>, GetRequestParameters, IGetRequest> {
}
interface GetResponse<T> extends ResponseBase {
	_index: string;
	_type: string;
	_id: string;
	_version: long;
	found: boolean;
	_source: T;
	fields: KeyValuePair<string, any>[];
}
interface IndexRequest<TDocument> extends RequestBase<IndexRequestParameters> {
	Document: TDocument;
	Consistency: Consistency;
	OpType: OpType;
	Parent: string;
	Refresh: boolean;
	Routing: string;
	Timeout: Time;
	Timestamp: Time;
	Ttl: Time;
	Version: long;
	VersionType: VersionType;
	Source: string;
	FilterPath: string;
}
interface IndexDescriptor<TDocument> extends RequestDescriptorBase<IndexDescriptor<TDocument>, IndexRequestParameters, IIndexRequest<TDocument>> {
}
interface IndexResponse extends ResponseBase {
	_index: string;
	_type: string;
	_id: string;
	_version: long;
	created: boolean;
}
interface SourceRequest extends RequestBase<SourceRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Parent: string;
	/** mapped on body but might only proxy to request querystring */ Preference: string;
	/** mapped on body but might only proxy to request querystring */ Realtime: boolean;
	/** mapped on body but might only proxy to request querystring */ Refresh: boolean;
	/** mapped on body but might only proxy to request querystring */ Routing: string;
	/** mapped on body but might only proxy to request querystring */ SourceEnabled: string[];
	/** mapped on body but might only proxy to request querystring */ SourceExclude: Field[];
	/** mapped on body but might only proxy to request querystring */ SourceInclude: Field[];
	/** mapped on body but might only proxy to request querystring */ Version: long;
	/** mapped on body but might only proxy to request querystring */ VersionType: VersionType;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface SourceRequest<T> extends RequestBase<SourceRequestParameters> {
	Parent: string;
	Preference: string;
	Realtime: boolean;
	Refresh: boolean;
	Routing: string;
	SourceEnabled: string[];
	SourceExclude: Field[];
	SourceInclude: Field[];
	Version: long;
	VersionType: VersionType;
	Source: string;
	FilterPath: string;
}
interface SourceDescriptor<T> extends RequestDescriptorBase<SourceDescriptor<T>, SourceRequestParameters, ISourceRequest> {
}
interface TermVectorsRequest<TDocument> extends RequestBase<TermVectorsRequestParameters> {
	doc: TDocument;
	per_field_analyzer: KeyValuePair<Field, string>[];
	TermStatistics: boolean;
	FieldStatistics: boolean;
	Dfs: boolean;
	Fields: Field[];
	Offsets: boolean;
	Positions: boolean;
	Payloads: boolean;
	Preference: string;
	Routing: string;
	Parent: string;
	Realtime: boolean;
	Version: long;
	VersionType: VersionType;
	Source: string;
	FilterPath: string;
}
interface TermVectorsDescriptor<TDocument> extends RequestDescriptorBase<TermVectorsDescriptor<TDocument>, TermVectorsRequestParameters, ITermVectorsRequest<TDocument>> {
}
interface UpdateRequest<TDocument, TPartialDocument> extends RequestBase<UpdateRequestParameters> {
	script: string;
	script_file: string;
	lang: string;
	/** type has a custom json converter defined */ params: KeyValuePair<string, any>[];
	upsert: TDocument;
	doc_as_upsert: boolean;
	doc: TPartialDocument;
	detect_noop: boolean;
	Fields: Field[];
	Consistency: Consistency;
	Lang: string;
	Parent: string;
	Refresh: boolean;
	RetryOnConflict: long;
	Routing: string;
	ScriptQueryString: string;
	script_id: string;
	ScriptedUpsert: boolean;
	Timeout: Time;
	Timestamp: Time;
	Ttl: Time;
	Version: long;
	VersionType: VersionType;
	Source: string;
	FilterPath: string;
}
interface UpdateDescriptor<TDocument, TPartialDocument> extends RequestDescriptorBase<UpdateDescriptor<TDocument, TPartialDocument>, UpdateRequestParameters, IUpdateRequest<TDocument, TPartialDocument>> {
}
interface UpdateResponse<T> extends ResponseBase {
	_shards: ShardsMetaData;
	_index: string;
	_type: string;
	_id: string;
	_version: long;
	get: InstantGet<T>;
}
interface InstantGet<T> {
	found: boolean;
	_source: T;
	fields: KeyValuePair<string, any>[];
}
interface BulkAliasRequest extends RequestBase<BulkAliasRequestParameters> {
	actions: IAliasAction[];
	/** mapped on body but might only proxy to request querystring */ Timeout: Time;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface IAliasAction {
}
interface BulkAliasResponse extends AcknowledgedResponseBase {
}
interface AliasExistsRequest extends RequestBase<AliasExistsRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface DeleteAliasRequest extends RequestBase<DeleteAliasRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Timeout: Time;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface DeleteAliasResponse extends ResponseBase {
}
interface GetAliasRequest extends RequestBase<GetAliasRequestParameters> {
	Alias: string;
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface GetAliasesRequest extends RequestBase<GetAliasesRequestParameters> {
	Alias: string;
	/** mapped on body but might only proxy to request querystring */ Timeout: Time;
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface GetAliasesResponse extends ResponseBase {
	Indices: KeyValuePair<string, AliasDefinition[]>[];
}
interface AliasDefinition {
	Name: string;
	filter: IQueryContainer;
	routing: string;
	index_routing: string;
	search_routing: string;
}
interface PutAliasRequest extends RequestBase<PutAliasRequestParameters> {
	routing: string;
	filter: /** type has a custom json converter defined */ QueryContainer;
	/** mapped on body but might only proxy to request querystring */ Timeout: Time;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface PutAliasResponse extends ResponseBase {
}
interface AnalyzeRequest extends RequestBase<AnalyzeRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Analyzer: string;
	/** mapped on body but might only proxy to request querystring */ CharFilters: string[];
	/** mapped on body but might only proxy to request querystring */ Field: Field;
	/** mapped on body but might only proxy to request querystring */ Filters: string[];
	/** mapped on body but might only proxy to request querystring */ PreferLocal: boolean;
	/** mapped on body but might only proxy to request querystring */ Text: string[];
	/** mapped on body but might only proxy to request querystring */ Tokenizer: string;
	/** mapped on body but might only proxy to request querystring */ Format: Format;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface AnalyzeResponse extends ResponseBase {
	tokens: AnalyzeToken[];
}
interface AnalyzeToken {
	token: string;
	type: string;
	start_offset: integer;
	end_offset: integer;
	position: integer;
}
interface /** type has a custom json converter defined */ CreateIndexRequest extends RequestBase<CreateIndexRequestParameters> {
	Settings: KeyValuePair<string, any>[];
	Mappings: KeyValuePair<TypeName, ITypeMapping>[];
	Warmers: KeyValuePair<TypeName, IWarmer>[];
	Aliases: KeyValuePair<IndexName, IAlias>[];
	Similarity: KeyValuePair<string, ISimilarity>[];
	/** mapped on body but might only proxy to request querystring */ Timeout: Time;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ UpdateAllTypes: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface ISimilarity {
	type: string;
}
interface CreateIndexResponse extends AcknowledgedResponseBase {
}
interface DeleteIndexRequest extends RequestBase<DeleteIndexRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Timeout: Time;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface DeleteIndexResponse extends IndicesResponseBase {
}
interface GetIndexRequest extends RequestBase<GetIndexRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ FlatSettings: boolean;
	/** mapped on body but might only proxy to request querystring */ Human: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface GetIndexResponse extends ResponseBase {
	Indices: KeyValuePair<string, /** type has a custom json converter defined */ IndexState>[];
}
interface /** type has a custom json converter defined */ IndexState {
	settings: KeyValuePair<string, any>[];
	mappings: KeyValuePair<TypeName, ITypeMapping>[];
	aliases: KeyValuePair<IndexName, IAlias>[];
	warmers: KeyValuePair<TypeName, IWarmer>[];
	similarity: KeyValuePair<string, ISimilarity>[];
}
interface IndexExistsRequest extends RequestBase<IndexExistsRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface ExistsResponse extends ResponseBase {
	Exists: boolean;
}
interface CloseIndexRequest extends RequestBase<CloseIndexRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Timeout: Time;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface CloseIndexResponse extends AcknowledgedResponseBase {
}
interface OpenIndexRequest extends RequestBase<OpenIndexRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Timeout: Time;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface OpenIndexResponse extends AcknowledgedResponseBase {
}
interface TypeExistsRequest extends RequestBase<TypeExistsRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface GetIndexSettingsRequest extends RequestBase<GetIndexSettingsRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ FlatSettings: boolean;
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ Human: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface /** type has a custom json converter defined */ GetIndexSettingsResponse extends DictionaryResponseBase<string, IIndexState> {
	Indices: KeyValuePair<string, IIndexState>[];
}
interface IIndexState {
	settings: KeyValuePair<string, any>[];
	aliases: KeyValuePair<IndexName, IAlias>[];
	warmers: KeyValuePair<TypeName, IWarmer>[];
	mappings: KeyValuePair<TypeName, ITypeMapping>[];
	similarity: KeyValuePair<string, ISimilarity>[];
}
interface DeleteIndexTemplateRequest extends RequestBase<DeleteIndexTemplateRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Timeout: Time;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface DeleteIndexTemplateResponse extends AcknowledgedResponseBase {
}
interface GetIndexTemplateRequest extends RequestBase<GetIndexTemplateRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ FlatSettings: boolean;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface /** type has a custom json converter defined */ GetIndexTemplateResponse extends DictionaryResponseBase<string, TemplateMapping> {
	TemplateMappings: KeyValuePair<string, TemplateMapping>[];
}
interface IndexTemplateExistsRequest extends RequestBase<IndexTemplateExistsRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface PutIndexTemplateRequest extends RequestBase<PutIndexTemplateRequestParameters> {
	Template: string;
	Order: integer;
	Settings: KeyValuePair<string, any>[];
	Mappings: KeyValuePair<TypeName, ITypeMapping>[];
	Warmers: KeyValuePair<TypeName, IWarmer>[];
	Aliases: KeyValuePair<IndexName, IAlias>[];
	/** mapped on body but might only proxy to request querystring */ Create: boolean;
	/** mapped on body but might only proxy to request querystring */ Timeout: Time;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ FlatSettings: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface PutIndexTemplateResponse extends AcknowledgedResponseBase {
}
interface /** type has a custom json converter defined */ UpdateIndexSettingsRequest extends RequestBase<UpdateIndexSettingsRequestParameters> {
	IndexSettings: KeyValuePair<string, any>[];
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ FlatSettings: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface UpdateIndexSettingsResponse extends AcknowledgedResponseBase {
}
interface GetFieldMappingRequest extends RequestBase<GetFieldMappingRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ IncludeDefaults: boolean;
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface GetFieldMappingDescriptor<T> extends RequestDescriptorBase<GetFieldMappingDescriptor<T>, GetFieldMappingRequestParameters, IGetFieldMappingRequest> {
}
interface GetFieldMappingResponse extends ResponseBase {
	Indices: KeyValuePair<string, TypeFieldMappings>[];
}
interface TypeFieldMappings {
	mappings: KeyValuePair<string, KeyValuePair<string, FieldMapping>[]>[];
}
interface FieldMapping {
	full_name: string;
	/** type has a custom json converter defined */ mapping: KeyValuePair<string, IFieldMapping>[];
}
interface IFieldMapping {
}
interface GetMappingRequest extends RequestBase<GetMappingRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface GetMappingDescriptor<T> extends RequestDescriptorBase<GetMappingDescriptor<T>, GetMappingRequestParameters, IGetMappingRequest> {
}
interface GetMappingResponse extends ResponseBase {
	IsValid: boolean;
	Mappings: KeyValuePair<string, /** type has a custom json converter defined */ TypeMapping[]>[];
	Mapping: /** type has a custom json converter defined */ TypeMapping;
}
interface /** type has a custom json converter defined */ TypeMapping {
	_all: IAllField;
	analyzer: string;
	date_detection: boolean;
	dynamic: DynamicMapping;
	dynamic_date_formats: string[];
	dynamic_templates: KeyValuePair<string, IDynamicTemplate>[];
	_field_names: IFieldNamesField;
	_index: IIndexField;
	/** type has a custom json converter defined */ _meta: KeyValuePair<string, any>[];
	numeric_detection: boolean;
	_parent: IParentField;
	properties: KeyValuePair<PropertyName, IProperty>[];
	_routing: IRoutingField;
	search_analyzer: string;
	_size: ISizeField;
	_source: ISourceField;
	_timestamp: ITimestampField;
	/** type has a custom json converter defined */ transform: IMappingTransform[];
	_ttl: ITtlField;
}
interface /** type has a custom json converter defined */ PutMappingRequest extends RequestBase<PutMappingRequestParameters> {
	AllField: IAllField;
	DateDetection: boolean;
	DynamicDateFormats: string[];
	DynamicTemplates: KeyValuePair<string, IDynamicTemplate>[];
	Dynamic: DynamicMapping;
	Analyzer: string;
	SearchAnalyzer: string;
	FieldNamesField: IFieldNamesField;
	IndexField: IIndexField;
	Meta: KeyValuePair<string, any>[];
	NumericDetection: boolean;
	ParentField: IParentField;
	Properties: KeyValuePair<PropertyName, IProperty>[];
	RoutingField: IRoutingField;
	SizeField: ISizeField;
	SourceField: ISourceField;
	TimestampField: ITimestampField;
	Transform: IMappingTransform[];
	TtlField: ITtlField;
	/** mapped on body but might only proxy to request querystring */ Timeout: Time;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ UpdateAllTypes: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface PutMappingRequest<T> extends RequestBase<PutMappingRequestParameters> {
	AllField: IAllField;
	DateDetection: boolean;
	DynamicDateFormats: string[];
	DynamicTemplates: KeyValuePair<string, IDynamicTemplate>[];
	Dynamic: DynamicMapping;
	Analyzer: string;
	SearchAnalyzer: string;
	FieldNamesField: IFieldNamesField;
	IndexField: IIndexField;
	Meta: KeyValuePair<string, any>[];
	NumericDetection: boolean;
	ParentField: IParentField;
	Properties: KeyValuePair<PropertyName, IProperty>[];
	RoutingField: IRoutingField;
	SizeField: ISizeField;
	SourceField: ISourceField;
	TimestampField: ITimestampField;
	Transform: IMappingTransform[];
	TtlField: ITtlField;
	Timeout: Time;
	MasterTimeout: Time;
	IgnoreUnavailable: boolean;
	AllowNoIndices: boolean;
	ExpandWildcards: ExpandWildcards;
	UpdateAllTypes: boolean;
	Source: string;
	FilterPath: string;
}
interface PutMappingDescriptor<T> extends RequestDescriptorBase<PutMappingDescriptor<T>, PutMappingRequestParameters, IPutMappingRequest> {
}
interface PutMappingResponse extends IndicesResponseBase {
}
interface RecoveryStatusRequest extends RequestBase<RecoveryStatusRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Detailed: boolean;
	/** mapped on body but might only proxy to request querystring */ ActiveOnly: boolean;
	/** mapped on body but might only proxy to request querystring */ Human: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface RecoveryStatusResponse extends ResponseBase {
	/** type has a custom json converter defined */ Indices: KeyValuePair<string, RecoveryStatus>[];
}
interface RecoveryStatus {
	shards: ShardRecovery[];
}
interface ShardRecovery {
	id: long;
	type: string;
	stage: string;
	primary: boolean;
	start_time: Date;
	stop_time: Date;
	total_time_in_millis: long;
	source: RecoveryOrigin;
	target: RecoveryOrigin;
	index: RecoveryIndexStatus;
	translog: RecoveryTranslogStatus;
	start: RecoveryStartStatus;
}
interface RecoveryOrigin {
	id: string;
	hostname: string;
	ip: string;
	name: string;
}
interface RecoveryIndexStatus {
	total_time_in_millis: long;
	bytes: RecoveryBytes;
	files: RecoveryFiles;
}
interface RecoveryBytes {
	total: long;
	reused: long;
	recovered: long;
	percent: string;
}
interface RecoveryFiles {
	total: long;
	reused: long;
	recovered: long;
	percent: string;
	details: RecoveryFileDetails[];
}
interface RecoveryFileDetails {
	name: string;
	length: long;
	recovered: long;
}
interface RecoveryTranslogStatus {
	recovered: long;
	total: long;
	percent: string;
	total_on_start: long;
	total_time: string;
	total_time_in_millis: long;
}
interface RecoveryStartStatus {
	check_index_time: long;
	total_time_in_millis: string;
}
interface SegmentsRequest extends RequestBase<SegmentsRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ Human: boolean;
	/** mapped on body but might only proxy to request querystring */ OperationThreading: string;
	/** mapped on body but might only proxy to request querystring */ Verbose: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface SegmentsResponse extends ResponseBase {
	_shards: ShardsMetaData;
	/** type has a custom json converter defined */ indices: KeyValuePair<string, IndexSegment>[];
}
interface IndexSegment {
	/** type has a custom json converter defined */ shards: KeyValuePair<string, ShardsSegment>[];
}
interface ShardsSegment {
	num_committed_segments: integer;
	num_search_segments: integer;
	routing: ShardSegmentRouting;
	/** type has a custom json converter defined */ Segments: KeyValuePair<string, Segment>[];
}
interface ShardSegmentRouting {
	state: string;
	primary: boolean;
	node: string;
}
interface Segment {
	generation: integer;
	num_docs: long;
	deleted_docs: long;
	size: string;
	size_in_bytes: double;
	committed: boolean;
	Search: boolean;
}
interface IndicesStatsRequest extends RequestBase<IndicesStatsRequestParameters> {
	Types: TypeName[];
	/** mapped on body but might only proxy to request querystring */ CompletionFields: Field[];
	/** mapped on body but might only proxy to request querystring */ FielddataFields: Field[];
	/** mapped on body but might only proxy to request querystring */ Fields: Field[];
	/** mapped on body but might only proxy to request querystring */ Groups: string[];
	/** mapped on body but might only proxy to request querystring */ Human: boolean;
	/** mapped on body but might only proxy to request querystring */ Level: Level;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface IndicesStatsResponse extends ResponseBase {
	_shards: ShardsMetaData;
	_all: IndicesStats;
	/** type has a custom json converter defined */ indices: KeyValuePair<string, IndicesStats>[];
}
interface IndicesStats {
	primaries: IndexStats;
	total: IndexStats;
}
interface ClearCacheRequest extends RequestBase<ClearCacheRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ FieldData: boolean;
	/** mapped on body but might only proxy to request querystring */ Fields: Field[];
	/** mapped on body but might only proxy to request querystring */ Query: boolean;
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ Recycler: boolean;
	/** mapped on body but might only proxy to request querystring */ Request: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface ClearCacheResponse extends ShardsOperationResponseBase {
}
interface FlushRequest extends RequestBase<FlushRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Force: boolean;
	/** mapped on body but might only proxy to request querystring */ WaitIfOngoing: boolean;
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface FlushResponse extends ShardsOperationResponseBase {
}
interface OptimizeRequest extends RequestBase<OptimizeRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Flush: boolean;
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ MaxNumSegments: long;
	/** mapped on body but might only proxy to request querystring */ OnlyExpungeDeletes: boolean;
	/** mapped on body but might only proxy to request querystring */ OperationThreading: string;
	/** mapped on body but might only proxy to request querystring */ WaitForMerge: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface OptimizeResponse extends ShardsOperationResponseBase {
}
interface RefreshRequest extends RequestBase<RefreshRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ Force: boolean;
	/** mapped on body but might only proxy to request querystring */ OperationThreading: string;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface RefreshResponse extends ShardsOperationResponseBase {
}
interface SyncedFlushRequest extends RequestBase<SyncedFlushRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface SyncedFlushResponse extends ShardsOperationResponseBase {
}
interface UpgradeRequest extends RequestBase<UpgradeRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ WaitForCompletion: boolean;
	/** mapped on body but might only proxy to request querystring */ OnlyAncientSegments: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface UpgradeResponse extends ResponseBase {
	_shards: ShardsMetaData;
}
interface UpgradeStatusRequest extends RequestBase<UpgradeStatusRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ Human: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface /** type has a custom json converter defined */ UpgradeStatusResponse extends ResponseBase {
	/** type has a custom json converter defined */ Upgrades: KeyValuePair<string, UpgradeStatus>[];
	SizeInBytes: long;
	SizeToUpgradeInBytes: string;
	SizeToUpgradeAncientInBytes: string;
}
interface UpgradeStatus {
	size: string;
	size_in_bytes: long;
	size_to_upgrade: string;
	size_to_upgrade_in_bytes: string;
	size_to_upgrade_ancient_in_bytes: string;
}
interface DeleteWarmerRequest extends RequestBase<DeleteWarmerRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface DeleteWarmerResponse extends AcknowledgedResponseBase {
}
interface GetWarmerRequest extends RequestBase<GetWarmerRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface /** type has a custom json converter defined */ GetWarmerResponse extends ResponseBase {
	/** type has a custom json converter defined */ Indices: KeyValuePair<string, KeyValuePair<TypeName, IWarmer>[]>[];
}
interface /** type has a custom json converter defined */ PutWarmerRequest extends RequestBase<PutWarmerRequestParameters> {
	Search: ISearchRequest;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ RequestCache: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface PutWarmerResponse extends AcknowledgedResponseBase {
}
interface DeleteScriptRequest extends RequestBase<DeleteScriptRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Version: long;
	/** mapped on body but might only proxy to request querystring */ VersionType: VersionType;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface DeleteScriptResponse extends AcknowledgedResponseBase {
}
interface GetScriptRequest extends RequestBase<GetScriptRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Version: long;
	/** mapped on body but might only proxy to request querystring */ VersionType: VersionType;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface GetScriptResponse extends ResponseBase {
	script: string;
}
interface PutScriptRequest extends RequestBase<PutScriptRequestParameters> {
	script: string;
	/** mapped on body but might only proxy to request querystring */ OpType: OpType;
	/** mapped on body but might only proxy to request querystring */ Version: long;
	/** mapped on body but might only proxy to request querystring */ VersionType: VersionType;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface PutScriptResponse extends AcknowledgedResponseBase {
}
interface /** type has a custom json converter defined */ CreateRepositoryRequest extends RequestBase<CreateRepositoryRequestParameters> {
	Repository: ISnapshotRepository;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ Timeout: Time;
	/** mapped on body but might only proxy to request querystring */ Verify: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface ISnapshotRepository {
	type: string;
}
interface CreateRepositoryResponse extends AcknowledgedResponseBase {
}
interface DeleteRepositoryRequest extends RequestBase<DeleteRepositoryRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ Timeout: Time;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface DeleteRepositoryResponse extends AcknowledgedResponseBase {
}
interface GetRepositoryRequest extends RequestBase<GetRepositoryRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface /** type has a custom json converter defined */ GetRepositoryResponse extends ResponseBase {
	Repositories: KeyValuePair<string, ISnapshotRepository>[];
}
interface VerifyRepositoryRequest extends RequestBase<VerifyRepositoryRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ Timeout: Time;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface VerifyRepositoryResponse extends ResponseBase {
	/** type has a custom json converter defined */ nodes: KeyValuePair<string, CompactNodeInfo>[];
}
interface CompactNodeInfo {
	name: string;
}
interface RestoreRequest extends RequestBase<RestoreRequestParameters> {
	indices: Indices;
	ignore_unavailable: boolean;
	include_global_state: boolean;
	rename_pattern: string;
	rename_replacement: string;
	index_settings: IUpdateIndexSettingsRequest;
	ignore_index_settings: string[];
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ WaitForCompletion: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface IUpdateIndexSettingsRequest {
	IndexSettings: KeyValuePair<string, any>[];
	Index: Indices;
}
interface RestoreResponse extends ResponseBase {
	snapshot: SnapshotRestore;
}
interface SnapshotRestore {
	snapshot: string;
	indices: IndexName[];
	shards: ShardsMetaData;
}
interface DeleteSnapshotRequest extends RequestBase<DeleteSnapshotRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface DeleteSnapshotResponse extends AcknowledgedResponseBase {
}
interface GetSnapshotRequest extends RequestBase<GetSnapshotRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface GetSnapshotResponse extends ResponseBase {
	snapshots: Snapshot[];
}
interface Snapshot {
	snapshot: string;
	indices: IndexName[];
	state: string;
	start_time: Date;
	start_time_in_millis: long;
	end_time: Date;
	end_time_in_millis: long;
	duration_in_millis: long;
	shards: ShardsMetaData;
	failures: SnapshotShardFailure[];
	Failures: string[];
}
interface SnapshotShardFailure {
	node_id: string;
	index: string;
	shard_id: string;
	reason: string;
	status: string;
}
interface SnapshotRequest extends RequestBase<SnapshotRequestParameters> {
	/** type has a custom json converter defined */ indices: Indices;
	ignore_unavailable: boolean;
	include_global_state: boolean;
	partial: boolean;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ WaitForCompletion: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface SnapshotResponse extends ResponseBase {
	accepted: boolean;
	snapshot: Snapshot;
}
interface SnapshotStatusRequest extends RequestBase<SnapshotStatusRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface SnapshotStatusResponse extends ResponseBase {
	snapshots: SnapshotStatus[];
}
interface SnapshotStatus {
	snapshot: string;
	repository: string;
	state: string;
	shards_stats: SnapshotShardsStats;
	stats: SnapshotStats;
	indices: KeyValuePair<string, SnapshotIndexStats>[];
}
interface SnapshotShardsStats {
	initializing: long;
	started: long;
	finalizing: long;
	done: long;
	failed: long;
	total: long;
}
interface SnapshotStats {
	number_of_files: long;
	processed_files: long;
	total_size_in_bytes: long;
	processed_size_in_bytes: long;
	start_time_in_millis: long;
	time_in_millis: long;
}
interface SnapshotIndexStats {
	shards_stats: SnapshotShardsStats;
	stats: SnapshotStats;
	shards: KeyValuePair<string, SnapshotShardsStats>[];
}
interface /** type has a custom json converter defined */ CountRequest extends RequestBase<CountRequestParameters> {
	query: /** type has a custom json converter defined */ QueryContainer;
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ MinScore: double;
	/** mapped on body but might only proxy to request querystring */ Preference: string;
	/** mapped on body but might only proxy to request querystring */ Routing: string;
	/** mapped on body but might only proxy to request querystring */ QueryOnQueryString: string;
	/** mapped on body but might only proxy to request querystring */ Analyzer: string;
	/** mapped on body but might only proxy to request querystring */ AnalyzeWildcard: boolean;
	/** mapped on body but might only proxy to request querystring */ DefaultOperator: DefaultOperator;
	/** mapped on body but might only proxy to request querystring */ Df: string;
	/** mapped on body but might only proxy to request querystring */ Lenient: boolean;
	/** mapped on body but might only proxy to request querystring */ LowercaseExpandedTerms: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface CountRequest<T> extends RequestBase<CountRequestParameters> {
	Query: /** type has a custom json converter defined */ QueryContainer;
	IgnoreUnavailable: boolean;
	AllowNoIndices: boolean;
	ExpandWildcards: ExpandWildcards;
	MinScore: double;
	Preference: string;
	Routing: string;
	QueryOnQueryString: string;
	Analyzer: string;
	AnalyzeWildcard: boolean;
	DefaultOperator: DefaultOperator;
	Df: string;
	Lenient: boolean;
	LowercaseExpandedTerms: boolean;
	Source: string;
	FilterPath: string;
}
interface CountDescriptor<T> extends RequestDescriptorBase<CountDescriptor<T>, CountRequestParameters, ICountRequest> {
}
interface CountResponse extends ResponseBase {
	count: long;
	_shards: ShardsMetaData;
}
interface ExplainRequest<TDocument> extends RequestBase<ExplainRequestParameters> {
	query: /** type has a custom json converter defined */ QueryContainer;
	AnalyzeWildcard: boolean;
	Analyzer: string;
	DefaultOperator: DefaultOperator;
	Df: string;
	Fields: Field[];
	Lenient: boolean;
	LowercaseExpandedTerms: boolean;
	Parent: string;
	Preference: string;
	QueryOnQueryString: string;
	Routing: string;
	SourceEnabled: string[];
	SourceExclude: Field[];
	SourceInclude: Field[];
	Source: string;
	FilterPath: string;
}
interface ExplainDescriptor<TDocument> extends RequestDescriptorBase<ExplainDescriptor<TDocument>, ExplainRequestParameters, IExplainRequest<TDocument>> {
}
interface ExplainResponse<T> extends ResponseBase {
	matched: boolean;
	explanation: ExplanationDetail;
	get: InstantGet<T>;
}
interface ExplanationDetail {
	value: float;
	description: string;
	details: ExplanationDetail[];
}
interface FieldStatsRequest extends RequestBase<FieldStatsRequestParameters> {
	fields: Field[];
	index_constraints: KeyValuePair<Field, IIndexConstraint>[];
	/** mapped on body but might only proxy to request querystring */ Level: Level;
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface IIndexConstraint {
	min_value: IIndexConstraintComparison;
	max_value: IIndexConstraintComparison;
}
interface IIndexConstraintComparison {
	gte: string;
	gt: string;
	lte: string;
	lt: string;
	format: string;
}
interface FieldStatsResponse extends ResponseBase {
	_shards: ShardsMetaData;
	indices: KeyValuePair<string, FieldStats>[];
}
interface FieldStats {
	fields: KeyValuePair<string, FieldStatsField>[];
}
interface FieldStatsField {
	max_doc: long;
	doc_count: long;
	density: long;
	sum_doc_freq: long;
	sum_total_term_freq: long;
	min_value: string;
	max_value: string;
}
interface /** type has a custom json converter defined */ MultiSearchRequest extends RequestBase<MultiSearchRequestParameters> {
	Operations: KeyValuePair<string, ISearchRequest>[];
	/** mapped on body but might only proxy to request querystring */ SearchType: SearchType;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface MultiSearchResponse extends ResponseBase {
	IsValid: boolean;
	TotalResponses: integer;
	AllResponses: IResponse[];
}
interface IResponse {
	IsValid: boolean;
	ApiCall: IApiCallDetails;
	ServerError: ServerError;
	OriginalException: Exception;
	DebugInformation: string;
}
interface /** type has a custom json converter defined */ MultiPercolateRequest extends RequestBase<MultiPercolateRequestParameters> {
	Percolations: IPercolateOperation[];
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface IPercolateOperation {
	MultiPercolateName: string;
	size: integer;
	track_scores: boolean;
	sort: ISort[];
	highlight: IHighlight;
	query: /** type has a custom json converter defined */ QueryContainer;
	filter: /** type has a custom json converter defined */ QueryContainer;
	aggs: KeyValuePair<string, IAggregationContainer>[];
}
interface MultiPercolateResponse extends ResponseBase {
	IsValid: boolean;
	Responses: PercolateResponse[];
}
interface PercolateResponse extends PercolateCountResponse {
	matches: PercolatorMatch[];
}
interface PercolateCountResponse extends ResponseBase {
	took: integer;
	total: long;
	_shards: ShardsMetaData;
	ServerError: ServerError;
}
interface PercolatorMatch {
	highlight: KeyValuePair<string, string[]>[];
	_id: string;
	_index: string;
	_score: double;
}
interface PercolateRequest<TDocument> extends RequestBase<PercolateRequestParameters> {
	MultiPercolateName: string;
	Highlight: IHighlight;
	Query: /** type has a custom json converter defined */ QueryContainer;
	Filter: /** type has a custom json converter defined */ QueryContainer;
	Aggregations: KeyValuePair<string, IAggregationContainer>[];
	Size: integer;
	TrackScores: boolean;
	doc: TDocument;
	Sort: ISort[];
	Routing: string[];
	Preference: string;
	IgnoreUnavailable: boolean;
	AllowNoIndices: boolean;
	ExpandWildcards: ExpandWildcards;
	PercolateIndex: string;
	PercolateType: string;
	PercolateRouting: string;
	PercolatePreference: string;
	PercolateFormat: PercolateFormat;
	Version: long;
	VersionType: VersionType;
	Source: string;
	FilterPath: string;
}
interface PercolateDescriptor<TDocument> extends RequestDescriptorBase<PercolateDescriptor<TDocument>, PercolateRequestParameters, IPercolateRequest<TDocument>> {
}
interface PercolateCountRequest<TDocument> extends RequestBase<PercolateCountRequestParameters> {
	MultiPercolateName: string;
	Size: integer;
	TrackScores: boolean;
	Sort: ISort[];
	Highlight: IHighlight;
	Query: /** type has a custom json converter defined */ QueryContainer;
	Filter: /** type has a custom json converter defined */ QueryContainer;
	Aggregations: KeyValuePair<string, IAggregationContainer>[];
	doc: TDocument;
	Routing: string[];
	Preference: string;
	IgnoreUnavailable: boolean;
	AllowNoIndices: boolean;
	ExpandWildcards: ExpandWildcards;
	PercolateIndex: string;
	PercolateType: string;
	Version: long;
	VersionType: VersionType;
	Source: string;
	FilterPath: string;
}
interface PercolateCountDescriptor<TDocument> extends RequestDescriptorBase<PercolateCountDescriptor<TDocument>, PercolateCountRequestParameters, IPercolateCountRequest<TDocument>> {
}
interface /** type has a custom json converter defined */ RegisterPercolatorRequest extends RequestBase<IndexRequestParameters> {
	Metadata: KeyValuePair<string, any>[];
	Query: /** type has a custom json converter defined */ QueryContainer;
}
interface RegisterPercolatorDescriptor<T> extends RequestDescriptorBase<RegisterPercolatorDescriptor<T>, IndexRequestParameters, IRegisterPercolatorRequest> {
}
interface RegisterPercolatorResponse extends ResponseBase {
	created: boolean;
	_index: string;
	_type: string;
	_id: string;
	_version: integer;
}
interface UnregisterPercolatorRequest extends RequestBase<DeleteRequestParameters> {
}
interface UnregisterPercolatorDescriptor<T> extends RequestDescriptorBase<UnregisterPercolatorDescriptor<T>, DeleteRequestParameters, IUnregisterPercolatorRequest> {
}
interface UnregisterPercolatorResponse extends ResponseBase {
	found: boolean;
	_index: string;
	_type: string;
	_id: string;
	_version: integer;
}
interface ClearScrollRequest extends RequestBase<ClearScrollRequestParameters> {
	scroll_id: string[];
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface ClearScrollResponse extends ResponseBase {
}
interface ScrollRequest extends RequestBase<ScrollRequestParameters> {
	CovariantTypes: Types;
	TypeSelector: Func<any, Hit<any>, Type>;
	scroll: Time;
	scroll_id: string;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface Hit<T> {
	fields: KeyValuePair<string, any>[];
	_source: T;
	_index: string;
	/** type has a custom json converter defined */ inner_hits: KeyValuePair<string, InnerHitsResult>[];
	_score: double;
	_type: string;
	_version: long;
	_id: string;
	_parent: string;
	_routing: string;
	_timestamp: long;
	_ttl: long;
	sort: any[];
	Highlights: KeyValuePair<string, HighlightHit>[];
	_explanation: Explanation;
	matched_queries: string[];
}
interface InnerHitsResult {
	hits: InnerHitsMetaData;
}
interface InnerHitsMetaData {
	total: long;
	max_score: double;
	hits: Hit<ILazyDocument>[];
}
interface HighlightHit {
	DocumentId: string;
	Field: string;
	Highlights: string[];
}
interface Explanation {
	value: float;
	description: string;
	details: ExplanationDetail[];
}
interface ILazyDocument {
}
interface ScrollDescriptor<T> extends RequestDescriptorBase<ScrollDescriptor<T>, ScrollRequestParameters, IScrollRequest> {
}
interface /** type has a custom json converter defined */ SearchRequest extends RequestBase<SearchRequestParameters> {
	timeout: string;
	from: integer;
	size: integer;
	explain: boolean;
	version: boolean;
	track_scores: boolean;
	min_score: double;
	terminate_after: long;
	fields: Field[];
	fielddata_fields: Field[];
	script_fields: KeyValuePair<string, IScriptField>[];
	/** type has a custom json converter defined */ _source: ISourceFilter;
	sort: ISort[];
	/** type has a custom json converter defined */ indices_boost: KeyValuePair<IndexName, double>[];
	post_filter: /** type has a custom json converter defined */ QueryContainer;
	inner_hits: KeyValuePair<string, IInnerHitsContainer>[];
	query: /** type has a custom json converter defined */ QueryContainer;
	rescore: IRescore;
	suggest: KeyValuePair<string, ISuggestBucket>[];
	highlight: IHighlight;
	aggs: KeyValuePair<string, IAggregationContainer>[];
	TypeSelector: Func<any, Hit<any>, Type>;
	/** mapped on body but might only proxy to request querystring */ Analyzer: string;
	/** mapped on body but might only proxy to request querystring */ AnalyzeWildcard: boolean;
	/** mapped on body but might only proxy to request querystring */ DefaultOperator: DefaultOperator;
	/** mapped on body but might only proxy to request querystring */ Df: string;
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ Lenient: boolean;
	/** mapped on body but might only proxy to request querystring */ LowercaseExpandedTerms: boolean;
	/** mapped on body but might only proxy to request querystring */ Preference: string;
	/** mapped on body but might only proxy to request querystring */ Routing: string[];
	/** mapped on body but might only proxy to request querystring */ Scroll: Time;
	/** mapped on body but might only proxy to request querystring */ SearchType: SearchType;
	/** mapped on body but might only proxy to request querystring */ Stats: string[];
	/** mapped on body but might only proxy to request querystring */ SuggestField: Field;
	/** mapped on body but might only proxy to request querystring */ SuggestMode: SuggestMode;
	/** mapped on body but might only proxy to request querystring */ SuggestSize: long;
	/** mapped on body but might only proxy to request querystring */ SuggestText: string;
	/** mapped on body but might only proxy to request querystring */ RequestCache: boolean;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface SearchRequest<T> extends RequestBase<SearchRequestParameters> {
	Timeout: string;
	From: integer;
	Size: integer;
	Explain: boolean;
	Version: boolean;
	TrackScores: boolean;
	MinScore: double;
	TerminateAfter: long;
	Fields: Field[];
	FielddataFields: Field[];
	ScriptFields: KeyValuePair<string, IScriptField>[];
	Source: ISourceFilter;
	Sort: ISort[];
	IndicesBoost: KeyValuePair<IndexName, double>[];
	PostFilter: /** type has a custom json converter defined */ QueryContainer;
	InnerHits: KeyValuePair<string, IInnerHitsContainer>[];
	Query: /** type has a custom json converter defined */ QueryContainer;
	Rescore: IRescore;
	Suggest: KeyValuePair<string, ISuggestBucket>[];
	Highlight: IHighlight;
	Aggregations: KeyValuePair<string, IAggregationContainer>[];
	TypeSelector: Func<any, Hit<any>, Type>;
	Analyzer: string;
	AnalyzeWildcard: boolean;
	DefaultOperator: DefaultOperator;
	Df: string;
	IgnoreUnavailable: boolean;
	AllowNoIndices: boolean;
	ExpandWildcards: ExpandWildcards;
	Lenient: boolean;
	LowercaseExpandedTerms: boolean;
	Preference: string;
	Routing: string[];
	Scroll: Time;
	SearchType: SearchType;
	Stats: string[];
	SuggestField: Field;
	SuggestMode: SuggestMode;
	SuggestSize: long;
	SuggestText: string;
	RequestCache: boolean;
	FilterPath: string;
}
interface SearchDescriptor<T> extends RequestDescriptorBase<SearchDescriptor<T>, SearchRequestParameters, ISearchRequest> {
}
interface SearchResponse<T> extends ResponseBase {
	ApiCall: IApiCallDetails;
	_shards: ShardsMetaData;
	hits: HitsMetaData<T>;
	/** type has a custom json converter defined */ aggregations: KeyValuePair<string, IAggregate>[];
	Aggs: AggregationsHelper;
	suggest: KeyValuePair<string, Suggest[]>[];
	took: integer;
	timed_out: boolean;
	terminated_early: boolean;
	_scroll_id: string;
	Total: long;
	MaxScore: double;
	Documents: T[];
	Hits: IHit<T>[];
	Fields: KeyValuePair<string, any>[][];
	Highlights: KeyValuePair<string, KeyValuePair<string, HighlightHit>[]>[];
}
interface HitsMetaData<T> {
	total: long;
	max_score: double;
	hits: IHit<T>[];
}
interface IHit<T> {
	Fields: KeyValuePair<string, any>[];
	Source: T;
	Index: string;
	Type: string;
	Version: long;
	Score: double;
	Id: string;
	Parent: string;
	Routing: string;
	Timestamp: long;
	Ttl: long;
	Sorts: any[];
	Highlights: KeyValuePair<string, HighlightHit>[];
	Explanation: Explanation;
	MatchedQueries: string[];
	InnerHits: KeyValuePair<string, InnerHitsResult>[];
}
interface IAggregate {
	Meta: KeyValuePair<string, any>[];
}
interface AggregationsHelper {
	Aggregations: KeyValuePair<string, IAggregate>[];
}
interface Suggest {
	length: integer;
	offset: integer;
	text: string;
	options: SuggestOption[];
}
interface SuggestOption {
	freq: integer;
	score: double;
	text: string;
	highlighted: string;
}
interface /** type has a custom json converter defined */ SearchExistsRequest extends RequestBase<SearchExistsRequestParameters> {
	query: /** type has a custom json converter defined */ QueryContainer;
	QueryString: string;
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ MinScore: double;
	/** mapped on body but might only proxy to request querystring */ Preference: string;
	/** mapped on body but might only proxy to request querystring */ Routing: string;
	/** mapped on body but might only proxy to request querystring */ QueryOnQueryString: string;
	/** mapped on body but might only proxy to request querystring */ Analyzer: string;
	/** mapped on body but might only proxy to request querystring */ AnalyzeWildcard: boolean;
	/** mapped on body but might only proxy to request querystring */ DefaultOperator: DefaultOperator;
	/** mapped on body but might only proxy to request querystring */ Df: string;
	/** mapped on body but might only proxy to request querystring */ Lenient: boolean;
	/** mapped on body but might only proxy to request querystring */ LowercaseExpandedTerms: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface SearchExistsRequest<T> extends RequestBase<SearchExistsRequestParameters> {
	Query: /** type has a custom json converter defined */ QueryContainer;
	QueryString: string;
	IgnoreUnavailable: boolean;
	AllowNoIndices: boolean;
	ExpandWildcards: ExpandWildcards;
	MinScore: double;
	Preference: string;
	Routing: string;
	QueryOnQueryString: string;
	Analyzer: string;
	AnalyzeWildcard: boolean;
	DefaultOperator: DefaultOperator;
	Df: string;
	Lenient: boolean;
	LowercaseExpandedTerms: boolean;
	Source: string;
	FilterPath: string;
}
interface SearchExistsDescriptor<T> extends RequestDescriptorBase<SearchExistsDescriptor<T>, SearchExistsRequestParameters, ISearchExistsRequest> {
}
interface SearchShardsRequest extends RequestBase<SearchShardsRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Preference: string;
	/** mapped on body but might only proxy to request querystring */ Routing: string;
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface SearchShardsRequest<T> extends RequestBase<SearchShardsRequestParameters> {
	Preference: string;
	Routing: string;
	Local: boolean;
	IgnoreUnavailable: boolean;
	AllowNoIndices: boolean;
	ExpandWildcards: ExpandWildcards;
	Source: string;
	FilterPath: string;
}
interface SearchShardsDescriptor<T> extends RequestDescriptorBase<SearchShardsDescriptor<T>, SearchShardsRequestParameters, ISearchShardsRequest> {
}
interface SearchShardsResponse extends ResponseBase {
	shards: SearchShard[][];
	nodes: KeyValuePair<string, SearchNode>[];
}
interface SearchShard {
	state: string;
	primary: boolean;
	node: string;
	relocating_node: string;
	shard: integer;
	index: string;
}
interface SearchNode {
	name: string;
	transport_address: string;
}
interface SearchTemplateRequest extends RequestBase<SearchTemplateRequestParameters> {
	template: string;
	file: string;
	id: string;
	params: KeyValuePair<string, any>[];
	TypeSelector: Func<any, Hit<any>, Type>;
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ Preference: string;
	/** mapped on body but might only proxy to request querystring */ Routing: string[];
	/** mapped on body but might only proxy to request querystring */ Scroll: Time;
	/** mapped on body but might only proxy to request querystring */ SearchType: SearchType;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface SearchTemplateRequest<T> extends SearchTemplateRequest {
}
interface SearchTemplateDescriptor<T> extends RequestDescriptorBase<SearchTemplateDescriptor<T>, SearchTemplateRequestParameters, ISearchTemplateRequest> {
}
interface DeleteSearchTemplateRequest extends RequestBase<DeleteSearchTemplateRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Version: long;
	/** mapped on body but might only proxy to request querystring */ VersionType: VersionType;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface DeleteSearchTemplateResponse extends AcknowledgedResponseBase {
}
interface GetSearchTemplateRequest extends RequestBase<GetSearchTemplateRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Version: long;
	/** mapped on body but might only proxy to request querystring */ VersionType: VersionType;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface GetSearchTemplateResponse extends ResponseBase {
	template: string;
}
interface /** type has a custom json converter defined */ PutSearchTemplateRequest extends RequestBase<PutSearchTemplateRequestParameters> {
	template: string;
	/** mapped on body but might only proxy to request querystring */ OpType: OpType;
	/** mapped on body but might only proxy to request querystring */ Version: long;
	/** mapped on body but might only proxy to request querystring */ VersionType: VersionType;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface PutSearchTemplateResponse extends AcknowledgedResponseBase {
}
interface /** type has a custom json converter defined */ SuggestRequest extends RequestBase<SuggestRequestParameters> {
	GlobalText: string;
	Suggest: KeyValuePair<string, ISuggestBucket>[];
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ Preference: string;
	/** mapped on body but might only proxy to request querystring */ Routing: string;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface SuggestDescriptor<T> extends RequestDescriptorBase<SuggestDescriptor<T>, SuggestRequestParameters, ISuggestRequest> {
}
interface /** type has a custom json converter defined */ SuggestResponse extends ResponseBase {
	Shards: ShardsMetaData;
	Suggestions: KeyValuePair<string, Suggest[]>[];
}
interface ValidateQueryRequest extends RequestBase<ValidateQueryRequestParameters> {
	query: /** type has a custom json converter defined */ QueryContainer;
	/** mapped on body but might only proxy to request querystring */ Explain: boolean;
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ OperationThreading: string;
	/** mapped on body but might only proxy to request querystring */ QueryOnQueryString: string;
	/** mapped on body but might only proxy to request querystring */ Analyzer: string;
	/** mapped on body but might only proxy to request querystring */ AnalyzeWildcard: boolean;
	/** mapped on body but might only proxy to request querystring */ DefaultOperator: DefaultOperator;
	/** mapped on body but might only proxy to request querystring */ Df: string;
	/** mapped on body but might only proxy to request querystring */ Lenient: boolean;
	/** mapped on body but might only proxy to request querystring */ LowercaseExpandedTerms: boolean;
	/** mapped on body but might only proxy to request querystring */ Rewrite: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface ValidateQueryRequest<T> extends RequestBase<ValidateQueryRequestParameters> {
	Query: /** type has a custom json converter defined */ QueryContainer;
	Explain: boolean;
	IgnoreUnavailable: boolean;
	AllowNoIndices: boolean;
	ExpandWildcards: ExpandWildcards;
	OperationThreading: string;
	QueryOnQueryString: string;
	Analyzer: string;
	AnalyzeWildcard: boolean;
	DefaultOperator: DefaultOperator;
	Df: string;
	Lenient: boolean;
	LowercaseExpandedTerms: boolean;
	Rewrite: boolean;
	Source: string;
	FilterPath: string;
}
interface ValidateQueryDescriptor<T> extends RequestDescriptorBase<ValidateQueryDescriptor<T>, ValidateQueryRequestParameters, IValidateQueryRequest> {
}
interface ValidateQueryResponse extends ResponseBase {
	valid: boolean;
	_shards: ShardsMetaData;
	explanations: ValidationExplanation[];
}
interface ValidationExplanation {
	index: string;
	valid: boolean;
	error: string;
	explanation: string;
}
interface CatHelpRequest extends RequestBase<CatHelpRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Help: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface CatNodeattrsRequest extends RequestBase<CatNodeattrsRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Local: boolean;
	/** mapped on body but might only proxy to request querystring */ MasterTimeout: Time;
	/** mapped on body but might only proxy to request querystring */ H: string[];
	/** mapped on body but might only proxy to request querystring */ Help: boolean;
	/** mapped on body but might only proxy to request querystring */ V: boolean;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface IndicesShardStoresRequest extends RequestBase<IndicesShardStoresRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Status: string[];
	/** mapped on body but might only proxy to request querystring */ IgnoreUnavailable: boolean;
	/** mapped on body but might only proxy to request querystring */ AllowNoIndices: boolean;
	/** mapped on body but might only proxy to request querystring */ ExpandWildcards: ExpandWildcards;
	/** mapped on body but might only proxy to request querystring */ OperationThreading: string;
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
interface RenderSearchTemplateRequest extends RequestBase<RenderSearchTemplateRequestParameters> {
	/** mapped on body but might only proxy to request querystring */ Source: string;
	/** mapped on body but might only proxy to request querystring */ FilterPath: string;
}
enum HttpMethod {
	GET = 0,
	POST = 1,
	PUT = 2,
	DELETE = 3,
	HEAD = 4
}
enum Bytes {
	b = 0,
	k = 1,
	m = 2,
	g = 3
}
enum Level {
	cluster = 0,
	indices = 1,
	shards = 2
}
enum WaitForStatus {
	green = 0,
	yellow = 1,
	red = 2
}
enum AuditEvent {
	SniffOnStartup = 0,
	SniffOnFail = 1,
	SniffOnStaleCluster = 2,
	SniffSuccess = 3,
	SniffFailure = 4,
	PingSuccess = 5,
	PingFailure = 6,
	Resurrection = 7,
	AllNodesDead = 8,
	BadResponse = 9,
	HealthyResponse = 10,
	MaxTimeoutReached = 11,
	MaxRetriesReached = 12
}
enum ExpandWildcards {
	open = 0,
	closed = 1,
	none = 2,
	all = 3
}
enum SuggestMode {
	missing = 0,
	popular = 1,
	always = 2
}
enum SearchType {
	query_then_fetch = 0,
	query_and_fetch = 1,
	dfs_query_then_fetch = 2,
	dfs_query_and_fetch = 3,
	count = 4,
	scan = 5
}
enum ThreadType {
	cpu = 0,
	wait = 1,
	block = 2
}
enum VersionType {
	internal = 0,
	external = 1,
	external_gte = 2,
	force = 3
}
enum Consistency {
	one = 0,
	quorum = 1,
	all = 2
}
enum DefaultOperator {
	AND = 0,
	OR = 1
}
enum OpType {
	index = 0,
	create = 1
}
enum Format {
	detailed = 0,
	text = 1
}
enum PercolateFormat {
	ids = 0
}
interface IApiCallDetails {
	Success: boolean;
	OriginalException: Exception;
	ServerError: ServerError;
	HttpMethod: HttpMethod;
	Uri: Uri;
	HttpStatusCode: integer;
	ResponseBodyInBytes: short[];
	RequestBodyInBytes: short[];
	AuditTrail: Audit[];
	DebugInformation: string;
}
interface ServerError {
	Error: Error;
	Status: integer;
}
interface Error {
	Index: string;
	Reason: string;
	ResourceId: string;
	ResourceType: string;
	Type: string;
	RootCause: RootCause[];
}
interface RootCause {
	Index: string;
	Reason: string;
	ResourceId: string;
	ResourceType: string;
	Type: string;
}
interface Audit {
	Event: AuditEvent;
	Started: Date;
	Ended: Date;
	Node: Node;
	Path: string;
	Exception: Exception;
}
interface Node {
	Uri: Uri;
	IsResurrected: boolean;
	HoldsData: boolean;
	MasterEligible: boolean;
	Id: string;
	Name: string;
	FailedAttempts: integer;
	DeadUntil: Date;
	IsAlive: boolean;
}
interface AllTypesMarker {
}
interface ManyTypes {
	Types: TypeName[];
}
interface AllIndicesMarker {
}
interface ManyIndices {
	Indices: IndexName[];
}
interface ExtendedMemoryStats extends MemoryStats {
	free_percent: integer;
	used_percent: integer;
}
interface MemoryStats {
	total: string;
	total_in_bytes: long;
	free: string;
	free_in_bytes: long;
	used: string;
	used_in_bytes: long;
}
interface CPUStats {
	percent: integer;
	sys: string;
	sys_in_millis: long;
	user: string;
	user_in_millis: long;
	total: string;
	total_in_millis: long;
}
interface MemoryStats {
	resident: string;
	resident_in_bytes: long;
	share: string;
	share_in_bytes: long;
	total_virtual: string;
	total_virtual_in_bytes: long;
}
interface MemoryStats {
	heap_used: string;
	heap_used_in_bytes: long;
	heap_used_percent: long;
	heap_committed: string;
	heap_committed_in_bytes: long;
	heap_max: string;
	heap_max_in_bytes: long;
	non_heap_used: string;
	non_heap_used_in_bytes: long;
	non_heap_committed: string;
	non_heap_committed_in_bytes: long;
	/** type has a custom json converter defined */ pools: KeyValuePair<string, JVMPool>[];
}
interface ThreadStats {
	count: long;
	peak_count: long;
}
interface GarbageCollectionStats {
	/** type has a custom json converter defined */ collectors: KeyValuePair<string, GarbageCollectionGenerationStats>[];
}
interface GarbageCollectionGenerationStats {
	collection_count: long;
	collection_time: string;
	collection_time_in_millis: long;
}
interface NodeBufferPool {
	count: long;
	used: string;
	used_in_bytes: long;
	total_capacity: string;
	total_capacity_in_bytes: long;
}
interface JvmClassesStats {
	current_loaded_count: long;
	total_loaded_count: long;
	total_unloaded_count: long;
}
interface JVMPool {
	used: string;
	UsedInBytes: long;
	max: string;
	max_in_bytes: long;
	peak_used: string;
	peak_used_in_bytes: long;
	peak_max: string;
	peak_max_in_bytes: long;
}
interface TotalFileSystemStats {
	available: string;
	available_in_bytes: long;
	free: string;
	free_in_bytes: long;
	total: string;
	total_in_bytes: long;
}
interface DataPathStats {
	path: string;
	mount: string;
	type: string;
	spins: boolean;
	total: string;
	total_in_bytes: long;
	free: string;
	free_in_bytes: long;
	available: string;
	available_in_bytes: long;
	disk_reads: long;
	disk_writes: long;
	disk_read_size: string;
	disk_read_size_in_bytes: long;
	disk_write_size: string;
	disk_write_size_in_bytes: long;
	disk_queue: string;
}
